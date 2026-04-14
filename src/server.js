import express from "express";
import cors from "cors";
import pg from "pg";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("Set DATABASE_URL environment variable before starting.");
}
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

await pool.query(`
  CREATE TABLE IF NOT EXISTS html_submissions (
    id          SERIAL PRIMARY KEY,
    tds         INTEGER NOT NULL,
    zone        TEXT    NOT NULL,
    pincode     TEXT    NOT NULL,
    city        TEXT,
    state       TEXT,
    submitted_at TIMESTAMP DEFAULT NOW() NOT NULL
  );
`);
console.log("✅ DB ready — html_submissions table ensured");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "..")));

app.post("/api/html/submit", async (req, res) => {
  const { tds, zone, pincode, city, state } = req.body;
  if (typeof tds !== "number" || !pincode || String(pincode).length !== 6) {
    return res.status(400).json({ error: "validation_error", message: "tds (number) and a 6-digit pincode are required" });
  }
  const { rows } = await pool.query(
    `INSERT INTO html_submissions (tds, zone, pincode, city, state)
     VALUES ($1, $2, $3, $4, $5) RETURNING id`,
    [Math.round(tds), zone ?? "Unknown", String(pincode), city ?? null, state ?? null]
  );
  return res.status(201).json({ success: true, id: rows[0].id });
});

app.get("/api/html/stats", async (_req, res) => {
  const { rows } = await pool.query("SELECT * FROM html_submissions");
  const total = rows.length;
  const avgTds = total > 0 ? Math.round(rows.reduce((s, r) => s + r.tds, 0) / total) : null;
  const zoneCounts = {};
  const stateCounts = {};
  for (const r of rows) {
    zoneCounts[r.zone] = (zoneCounts[r.zone] ?? 0) + 1;
    if (r.state) stateCounts[r.state] = (stateCounts[r.state] ?? 0) + 1;
  }
  const topZones = Object.entries(zoneCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([zone, count]) => ({ zone, count }));
  const topStates = Object.entries(stateCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([state, count]) => ({ state, count }));
  return res.json({ total, avgTds, topZones, topStates });
});

app.get("/api/html/recent", async (_req, res) => {
  const { rows } = await pool.query("SELECT * FROM html_submissions ORDER BY submitted_at DESC LIMIT 20");
  return res.json({ items: rows });
});

app.get("/api/pincode/:pin", async (req, res) => {
  const pin = req.params.pin;
  if (!/^\d{6}$/.test(pin)) {
    return res.status(400).json({ error: "invalid_pincode" });
  }
  try {
    const r = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
    const data = await r.json();
    if (data[0]?.Status !== "Success" || !data[0].PostOffice?.length) {
      return res.status(404).json({ error: "not_found" });
    }
    const po = data[0].PostOffice[0];
    return res.json({ pincode: pin, area: po.Name, district: po.District, state: po.State });
  } catch (err) {
    return res.status(502).json({ error: "upstream_failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 AquaCheck backend running at http://localhost:${PORT}`);
});
