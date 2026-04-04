// ── DATA ──
const zones = [
  {
    id:0, min:0, max:50, color:'#3b82f6',
    label:'Dangerously Low TDS',
    who:'Below WHO minimum', bis:'Below safe mineral threshold',
    whoPass:'fail', bisPass:'fail',
    desc:'Your water has almost no dissolved minerals. While it looks clean, regularly drinking water below 50 ppm can leach calcium and magnesium from your body. This is typical of heavily RO-treated water that lost its post-treatment mineralizer, or natural rainwater/glacier sources.',
    alert:'RO is NOT needed here — it will make things worse. A mineralizer cartridge to restore Ca and Mg is essential. UV + UF handles the microbial side.',
    alertColor:'#3b82f6', alertBg:'rgba(59,130,246,0.08)',
    stages:[
      {name:'Sediment filter (PP, 5 micron)', life:'3–4 months', why:'Removes sand, silt, rust — first line protection', req:true, special:false},
      {name:'Activated carbon (GAC)', life:'6–12 months', why:'Removes chlorine, odor, organic compounds from supply', req:true, special:false},
      {name:'UF membrane (0.01 micron)', life:'2–3 years', why:'Removes bacteria, cysts, colloids — without removing minerals', req:true, special:false},
      {name:'UV lamp', life:'8,000–10,000 hrs (~1 year)', why:'Kills viruses and drug-resistant bacteria that UF may miss', req:true, special:false},
      {name:'Mineralizer / remineralizer cartridge', life:'6–12 months', why:'Adds essential Ca and Mg back — CRITICAL at this TDS level', req:true, special:true},
    ],
    minNote:'Mineralizer is MANDATORY. Water below 50 ppm lacks the essential minerals your body needs daily. Do not skip or bypass this stage.',
    brands:[
      {name:'Aquaguard Maxima UV+UF (10L)', price:'₹8,200–₹11,000', waste:'0 litres/day', amc:'₹2,500–₹3,500/yr', best:true},
      {name:'Kent Ultra UV+UF (7L)', price:'₹7,000–₹9,500', waste:'0 litres/day', amc:'₹2,000–₹3,000/yr', best:false},
      {name:'Pureit Wave UV+UF (6L)', price:'₹6,000–₹8,000', waste:'0 litres/day', amc:'₹1,500–₹2,500/yr', best:false},
      {name:'Havells Aquas Lite UV+UF', price:'₹7,000–₹9,500', waste:'0 litres/day', amc:'₹2,000–₹3,000/yr', best:false},
    ],
    outputTds:'50–100 ppm (after mineralizer)', waste:'0 L/day', stageCount:'4–5 stage'
  },
  {
    id:1, min:51, max:150, color:'#22c55e',
    label:'Ideal TDS — WHO Sweet Spot',
    who:'✓ WHO ideal: below 300 ppm', bis:'✓ BIS recommended: below 200 ppm',
    whoPass:'pass', bisPass:'pass',
    desc:'This is the gold standard for drinking water quality. Water in this range has an excellent balance of minerals — enough calcium and magnesium for health without causing scale buildup. Taste is typically clean and refreshing. Common in quality municipal supply and hill-fed water systems.',
    alert:'RO is NOT recommended here. It will strip beneficial minerals and push TDS below 50 ppm, which then requires a mineralizer. UV + UF is the scientifically correct — and more economical — choice.',
    alertColor:'#22c55e', alertBg:'rgba(34,197,94,0.08)',
    stages:[
      {name:'Sediment filter (PP, 5 micron)', life:'3–4 months', why:'Removes sand, silt, rust particles from pipes', req:true, special:false},
      {name:'Activated carbon (GAC)', life:'6–12 months', why:'Removes chlorine, chloramine, THMs from municipal treatment', req:true, special:false},
      {name:'UF membrane (0.01 micron)', life:'2–3 years', why:'Blocks bacteria, protozoa, suspended solids — no mineral removal', req:true, special:false},
      {name:'UV lamp', life:'8,000–10,000 hrs (~1 year)', why:'Kills viruses and bacteria — essential microbial safety layer', req:true, special:false},
      {name:'Post carbon (polishing filter)', life:'12 months', why:'Optional final stage to improve taste and remove residual odor', req:false, special:false},
    ],
    minNote:null,
    brands:[
      {name:'Aquaguard Maxima UV+UF (10L)', price:'₹8,200–₹9,500', waste:'0 litres/day', amc:'₹2,500–₹3,500/yr', best:true},
      {name:'Pureit Wave UV+UF (6L)', price:'₹6,000–₹8,000', waste:'0 litres/day', amc:'₹1,500–₹2,500/yr', best:false},
      {name:'Kent Ultra UV+UF (7L)', price:'₹7,000–₹9,000', waste:'0 litres/day', amc:'₹2,000–₹3,000/yr', best:false},
      {name:'Havells Aquas Lite UV+UF', price:'₹7,000–₹9,500', waste:'0 litres/day', amc:'₹2,000–₹3,000/yr', best:false},
    ],
    outputTds:'50–150 ppm (unchanged)', waste:'0 L/day', stageCount:'4–5 stage'
  },
  {
    id:2, min:151, max:300, color:'#84cc16',
    label:'Good TDS',
    who:'✓ Within WHO recommended range', bis:'✓ BIS recommended: below 200 ppm',
    whoPass:'pass', bisPass:'warn',
    desc:'Good water quality with adequate mineral content. Slightly higher than the WHO ideal but well within safe limits. Municipal water in most Indian cities falls here. Microbial contamination risk exists, but dissolved solids are not a concern at this level.',
    alert:'RO is not needed and wastes 3–4 litres per litre purified without meaningful benefit at this TDS. UV + UF achieves complete microbial safety while preserving all healthy minerals.',
    alertColor:'#84cc16', alertBg:'rgba(132,204,22,0.08)',
    stages:[
      {name:'Sediment filter (PP, 5 micron)', life:'3–4 months', why:'First defense against sand, silt, rust from storage tanks and old pipes', req:true, special:false},
      {name:'Activated carbon block (CTO)', life:'6–12 months', why:'Removes chlorine, chloramine, THMs from municipal treatment', req:true, special:false},
      {name:'UF membrane (0.01 micron)', life:'2–3 years', why:'Removes bacteria, protozoa — no electricity needed, no water waste', req:true, special:false},
      {name:'UV lamp', life:'8,000–10,000 hrs', why:'Sterilises viruses and any bacteria that pass through UF pores', req:true, special:false},
      {name:'Post carbon (polishing filter)', life:'12 months', why:'Optional — improves final taste, removes residual odor', req:false, special:false},
    ],
    minNote:null,
    brands:[
      {name:'Aquaguard Neo UV+UF (7L)', price:'₹9,800–₹12,000', waste:'0 litres/day', amc:'₹2,500–₹3,500/yr', best:true},
      {name:'Kent Max UV+UF (8L)', price:'₹8,500–₹11,000', waste:'0 litres/day', amc:'₹2,000–₹3,000/yr', best:false},
      {name:'Blue Star Aristo UV+UF', price:'₹9,000–₹12,000', waste:'0 litres/day', amc:'₹2,500–₹3,500/yr', best:false},
      {name:'Pureit Advanced Pro UV+UF', price:'₹7,500–₹10,000', waste:'0 litres/day', amc:'₹2,000–₹3,000/yr', best:false},
    ],
    outputTds:'150–300 ppm (unchanged)', waste:'0 L/day', stageCount:'4–5 stage'
  },
  {
    id:3, min:301, max:500, color:'#eab308',
    label:'Acceptable TDS — Approaching BIS Limit',
    who:'⚠ WHO palatability concern above 300', bis:'⚠ At BIS maximum of 500 ppm',
    whoPass:'warn', bisPass:'warn',
    desc:'Water is within the BIS permissible limit but approaching the boundary. Taste may be slightly mineral-heavy, and scaling in kettles and geysers will increase. Borewell water in semi-urban Indian areas often falls here. RO is recommended, especially if water hardness (calcium/magnesium) is high or the source is borewell.',
    alert:'RO is recommended at this level. If you install RO, a TDS controller (MTDS) is mandatory — without it, RO will reduce output to 10–30 ppm, stripping all minerals. Target output TDS: 100–150 ppm.',
    alertColor:'#eab308', alertBg:'rgba(234,179,8,0.08)',
    stages:[
      {name:'Sediment filter (PP, 5 micron)', life:'3–4 months', why:'Protects RO membrane from clogging — essential first stage', req:true, special:false},
      {name:'Activated carbon (GAC pre-filter)', life:'6 months', why:'Removes chlorine — critical as chlorine destroys RO membranes within months', req:true, special:false},
      {name:'Carbon block (CTO)', life:'6 months', why:'Secondary chloramine and organic compound removal before RO', req:true, special:false},
      {name:'RO membrane (0.0001 micron)', life:'2–3 years', why:'Removes dissolved salts, heavy metals, fluoride, nitrates', req:true, special:false},
      {name:'TDS controller / MTDS valve', life:'Check every 6 months', why:'Blends ~20–30% raw water to maintain output at 100–150 ppm', req:true, special:true},
      {name:'UV lamp (post-RO)', life:'8,000–10,000 hrs', why:'Kills bacteria that survive or re-enter after RO stage', req:true, special:false},
      {name:'UF membrane (post-RO)', life:'2–3 years', why:'Removes dead bacteria cell bodies after UV stage', req:true, special:false},
      {name:'Post carbon (polishing)', life:'12 months', why:'Final taste improvement before the tap', req:false, special:false},
    ],
    minNote:'TDS controller (MTDS) is mandatory when using RO. Without it, output drops to 10–30 ppm, removing all essential minerals. Set output target to 100–150 ppm. Some purifiers use a mineralizer cartridge instead of MTDS — both achieve the same result.',
    brands:[
      {name:'Aquaguard Geneus RO+UV+UF (7L)', price:'₹15,000–₹18,000', waste:'1.5–2L per 1L purified', amc:'₹4,000–₹6,000/yr', best:true},
      {name:'Kent Grand Plus RO+UV+UF (8L)', price:'₹14,000–₹18,000', waste:'3–4L per 1L purified', amc:'₹3,500–₹5,000/yr', best:false},
      {name:'Livpure Allura Premia RO+UV+UF', price:'₹15,000–₹20,000', waste:'2–3L per 1L purified', amc:'₹0 for 2.5 yrs', best:false},
      {name:'AO Smith Z9 Green RO+UV (6L)', price:'₹22,000–₹28,000', waste:'1L per 1L purified', amc:'₹4,000–₹5,000/yr', best:false},
    ],
    outputTds:'100–150 ppm (with TDS ctrl)', waste:'9–20 L/day est.', stageCount:'6–8 stage'
  },
  {
    id:4, min:501, max:900, color:'#f97316',
    label:'Poor TDS — RO Mandatory',
    who:'✗ Exceeds WHO 500 ppm guideline', bis:'✗ Exceeds BIS 500 ppm limit',
    whoPass:'fail', bisPass:'fail',
    desc:'Water quality is clearly poor. Dissolved solids at this level often include excess hardness, sodium chloride, sulfates, and potentially nitrates or heavy metals. Long-term consumption without RO filtration can lead to kidney stress, arterial scaling, and digestive issues. Extremely common in borewell water across Delhi NCR, Rajasthan, Gujarat, UP, and Haryana.',
    alert:'RO is mandatory — no UV+UF-only system is sufficient here. Dissolved solids cannot be removed by physical or microbial filtration. A mineralizer is also strongly recommended since RO output without TDS control will be near 0 ppm.',
    alertColor:'#f97316', alertBg:'rgba(249,115,22,0.08)',
    stages:[
      {name:'Sediment filter (PP, 5 micron)', life:'2–3 months', why:'Frequent replacement needed — high TDS water carries more sediment', req:true, special:false},
      {name:'Activated carbon (GAC)', life:'4–6 months', why:'Chlorine removal to protect RO membrane — critical stage', req:true, special:false},
      {name:'Carbon block (CTO pre-filter)', life:'4–6 months', why:'Secondary organic and chloramine removal before RO', req:true, special:false},
      {name:'RO membrane (high-rejection, 75 GPD+)', life:'1–2 years', why:'Removes 95–99% of dissolved solids — core filtration at this TDS', req:true, special:false},
      {name:'TDS controller / MTDS valve', life:'Check every 3–6 months', why:'Maintains output at 100–150 ppm — prevents dangerous over-purification', req:true, special:true},
      {name:'UV lamp (post-RO)', life:'8,000–10,000 hrs', why:'Kills bacteria surviving in storage or entering post-RO', req:true, special:false},
      {name:'UF membrane (post-RO)', life:'2 years', why:'Removes dead pathogen bodies after UV stage', req:true, special:false},
      {name:'Mineralizer cartridge', life:'6 months', why:'RO strips virtually all minerals at this TDS — mineralizer adds Ca and Mg back', req:true, special:true},
      {name:'Post carbon (polishing)', life:'12 months', why:'Final odor and taste improvement', req:false, special:false},
    ],
    minNote:'Both TDS controller AND mineralizer are recommended at this range. RO will strip water to near-zero minerals. The mineralizer restores Ca and Mg — this is not optional for daily drinking water at 500–900 ppm input.',
    brands:[
      {name:'AO Smith Z9 Green RO+UV (6L)', price:'₹22,000–₹28,000', waste:'1L per 1L purified (HOD tech)', amc:'₹4,000–₹5,500/yr', best:true},
      {name:'Aquaguard Ingenius RO+UV+UF (10L)', price:'₹25,000–₹30,000', waste:'1.5–2L per 1L purified', amc:'₹6,000–₹8,500/yr', best:false},
      {name:'Kent Supreme Plus RO+UV+UF (8L)', price:'₹17,000–₹21,000', waste:'4–5L per 1L purified', amc:'₹4,000–₹5,500/yr', best:false},
      {name:'Livpure Allura Premia (7L)', price:'₹15,000–₹20,000', waste:'2–3L per 1L purified', amc:'₹0 for 2.5 yrs', best:false},
    ],
    outputTds:'100–150 ppm (with mineralizer)', waste:'15–30 L/day est.', stageCount:'8–9 stage'
  },
  {
    id:5, min:901, max:1500, color:'#dc2626',
    label:'Very Poor TDS — High Contamination Risk',
    who:'✗ Far exceeds all WHO limits', bis:'⚠ BIS: permitted only if no alternate source',
    whoPass:'fail', bisPass:'fail',
    desc:'Severely contaminated water. At this level, you likely have heavy concentrations of hardness salts, sodium, sulfates, and possibly nitrates, fluoride, arsenic, or heavy metals from industrial or geological sources. Prolonged consumption is associated with kidney stones, hypertension, and gastrointestinal disorders. Water also corrodes plumbing and damages appliances rapidly.',
    alert:'Heavy-duty multi-stage RO is essential. Verify the RO membrane is rated for 1200+ ppm input. Get a lab water test for fluoride, arsenic, and nitrates — TDS at this level often masks specific dangerous contaminants that need targeted treatment.',
    alertColor:'#dc2626', alertBg:'rgba(220,38,38,0.08)',
    stages:[
      {name:'Sediment (coarse, 10 micron)', life:'1–2 months', why:'Rapid clogging at this TDS — coarse pre-stage required first', req:true, special:false},
      {name:'Sediment (fine, 5 micron)', life:'2–3 months', why:'Fine pre-filter second stage to protect carbon filters and RO membrane', req:true, special:false},
      {name:'Activated carbon (GAC)', life:'3–4 months', why:'Chlorine and organic compound removal — shorter life at high TDS', req:true, special:false},
      {name:'Carbon block (CTO)', life:'3–4 months', why:'Additional chloramine and organic removal layer', req:true, special:false},
      {name:'RO membrane (99%+ rejection rating)', life:'1–1.5 years', why:'Must be rated for 99%+ rejection at 1200+ ppm input — standard membranes degrade faster', req:true, special:false},
      {name:'TDS controller / MTDS valve', life:'Check every 3 months', why:'Essential — RO will drop output to near-zero minerals without this', req:true, special:true},
      {name:'UV lamp (post-RO)', life:'8,000 hrs', why:'Post-RO microbial sterilisation', req:true, special:false},
      {name:'UF membrane (post-RO)', life:'1.5–2 years', why:'Removes dead cell debris and fine particles post-UV', req:true, special:false},
      {name:'Mineralizer cartridge', life:'4–6 months', why:'Mandatory — RO at this TDS level produces near-zero mineral water', req:true, special:true},
      {name:'Post carbon (polishing)', life:'6–12 months', why:'Final taste and odor polish before tap', req:true, special:false},
    ],
    minNote:'At this TDS level, RO output will be near 0 ppm — essentially demineralized water. Mineralizer is mandatory. Also strongly recommended: get a professional water lab test for fluoride (safe limit: 1.5 ppm), arsenic (safe: 0.01 ppm), and nitrates (safe: 45 ppm). TDS alone cannot detect these.',
    brands:[
      {name:'AO Smith Z9 Pro RO+UV (6L)', price:'₹25,000–₹32,000', waste:'1.5L per 1L purified', amc:'₹5,000–₹6,500/yr', best:true},
      {name:'Kent Grand Star RO+UV+UF (20L)', price:'₹18,000–₹24,000', waste:'5–6L per 1L purified', amc:'₹4,500–₹6,000/yr', best:false},
      {name:'Blue Star Majesto RO+UV+UF', price:'₹20,000–₹26,000', waste:'3–4L per 1L purified', amc:'₹4,500–₹6,000/yr', best:false},
      {name:'Aquaguard Ingenius RO+UV+UF (10L)', price:'₹25,000–₹30,000', waste:'2–3L per 1L purified', amc:'₹6,000–₹8,500/yr', best:false},
    ],
    outputTds:'100–150 ppm (with mineralizer)', waste:'30–60 L/day est.', stageCount:'9–10 stage'
  },
  {
    id:6, min:1501, max:99999, color:'#7f1d1d',
    label:'Extremely Unsafe — Beyond Home Purifier Range',
    who:'✗ Far beyond all international limits', bis:'✗ BIS max 2000 ppm — industrial treatment required',
    whoPass:'fail', bisPass:'fail',
    desc:'Water at this level is completely unsuitable for standard household purifiers. RO membranes are rated for a maximum input of 1000–2000 ppm — above 1500 ppm, membrane life degrades rapidly and purification efficiency drops severely. This typically indicates heavy industrial contamination, saltwater intrusion into the water table, or severely brackish groundwater. Do not drink this water without commercial-grade treatment.',
    alert:'Do NOT use a standard home RO purifier — it is not designed for this TDS level and will fail quickly. You need a commercial or industrial RO system. Contact your local municipal authority or Jal Jeevan Mission helpline: 1800-180-5555.',
    alertColor:'#dc2626', alertBg:'rgba(220,38,38,0.1)',
    stages:[
      {name:'Whole-house sediment pre-filtration', life:'Monthly cleaning', why:'Heavy solids will clog residential pre-filters within days at this TDS', req:true, special:false},
      {name:'Water softener (ion exchange resin)', life:'Varies — resin regeneration needed', why:'Reduces extreme hardness before RO to extend membrane life', req:true, special:false},
      {name:'Commercial/industrial RO system (25–50 LPH)', life:'Varies — professional maintenance', why:'Standard home RO is not rated for 1500+ ppm — will fail and expose you to unfiltered water', req:true, special:false},
      {name:'Post-treatment mineralizer (commercial)', life:'3–4 months', why:'Mandatory to restore essential minerals after commercial RO', req:true, special:true},
      {name:'Commercial UV steriliser', life:'12 months', why:'Final microbial safety step at the point of use', req:true, special:false},
    ],
    minNote:'Contact a water treatment specialist for a custom solution. You can also call Jal Jeevan Mission (1800-180-5555) — water at this level may qualify for government remediation. Strongly get a full lab test done before installing any system.',
    brands:[
      {name:'Industrial RO System (custom 50–100 LPH)', price:'₹80,000–₹2,00,000+', waste:'Varies by design', amc:'Custom AMC contract', best:true},
      {name:'Kent Commercial RO (25 LPH)', price:'₹40,000–₹75,000', waste:'5L per 1L purified', amc:'₹8,000–₹12,000/yr', best:false},
      {name:'Livpure Commercial RO (25 LPH)', price:'₹45,000–₹80,000', waste:'5–6L per 1L purified', amc:'₹8,000–₹15,000/yr', best:false},
    ],
    outputTds:'100–200 ppm (commercial RO)', waste:'70+ L/day', stageCount:'10+ stage (commercial)'
  }
];

function getZone(v){ return zones.find(z=>v>=z.min&&v<=z.max)||zones[zones.length-1]; }

function syncTDS(src){
  const sl=document.getElementById('tdsSlider');
  const ni=document.getElementById('tdsNum');
  let v;
  if(src==='slider'){v=parseInt(sl.value);ni.value=v;}
  else{v=Math.max(0,Math.min(2000,parseInt(ni.value)||0));sl.value=Math.min(v,2000);}
  const pct=(Math.min(v,2000)/2000)*100;
  document.getElementById('scaleCursor').style.left=pct+'%';
  for(let i=0;i<7;i++) document.getElementById('zd'+i).classList.remove('on');
  const z=getZone(v);
  document.getElementById('zd'+z.id).classList.add('on');
  renderResults(v,z);
  document.getElementById('submitSuccess').classList.remove('show');
}

// ── HEALTH DATA BY ZONE ──
const healthData = [
  {
    id:0,
    current:'⚠️ Your water at 0–50 ppm is severely mineral-deficient. Prolonged daily consumption can actively deplete your body\'s mineral stores.',
    currentColor:'#3b82f6',
    effects:[
      {icon:'🦴', title:'Bone & Dental Demineralisation', desc:'Water below 50 ppm acts as a "hungry water" — it leaches calcium and magnesium from your bones and teeth. Long-term studies show increased fracture risk and dental erosion in populations relying on hyper-purified water without remineralisation.'},
      {icon:'💓', title:'Cardiovascular Risk', desc:'Magnesium deficiency from ultra-low TDS water is associated with irregular heartbeat (arrhythmia), elevated blood pressure, and higher risk of ischaemic heart disease. WHO links chronic low-mineral water intake to cardiovascular mortality.'},
      {icon:'🧠', title:'Cognitive & Nervous System Effects', desc:'Low magnesium impairs nerve signal transmission. Extended consumption correlates with fatigue, muscle cramps, anxiety, and reduced cognitive performance. This is not immediate — it builds over months to years.'},
      {icon:'🚰', title:'Leaching from Pipes & Vessels', desc:'Demineralised water is chemically aggressive. It absorbs heavy metals and organic compounds from your pipes, tanks, and containers faster than normal water — effectively concentrating contaminants into your drinking water.'},
    ],
    longRun:'After 2–5 years of daily consumption without remineralisation: measurable bone density reduction, chronic fatigue, muscle spasms, and increased heavy metal exposure from plumbing are all documented outcomes in WHO research populations.',
    prevention:'A mineralizer cartridge (₹300–800/cartridge, replaces every 6–12 months) completely solves this. UV+UF handles all microbial risk at this TDS level.'
  },
  {
    id:1,
    current:'✅ Your water at 51–150 ppm is in the WHO ideal range. This is the healthiest TDS zone for long-term consumption.',
    currentColor:'#22c55e',
    effects:[
      {icon:'🦴', title:'Optimal Mineral Intake', desc:'Water in this range provides an ideal balance of calcium (40–80 mg/L) and magnesium (10–30 mg/L) — contributing meaningfully to your daily mineral requirements without causing scale buildup.'},
      {icon:'💓', title:'Cardiovascular Protection', desc:'Studies from WHO and multiple epidemiological surveys confirm that populations drinking water in the 50–150 ppm range have lower rates of cardiovascular disease compared to both very low and very high TDS populations.'},
      {icon:'🧬', title:'No Accumulation Risk', desc:'At this level, no harmful dissolved solids are present in excess. Your kidneys can handle this TDS easily, and there is no long-term accumulation of heavy minerals or salts in tissue.'},
    ],
    longRun:'Long-term consumption at 51–150 ppm: associated with optimal health outcomes, lower cardiovascular disease risk, better bone density, and no adverse renal effects. This is the benchmark all other TDS ranges are measured against.',
    prevention:'Protect this water quality with UV+UF only. Do NOT install RO — it will push your water to <30 ppm, creating the mineral deficiency problem described above.'
  },
  {
    id:2,
    current:'✅ Your water at 151–300 ppm is good quality and within safe limits. Minimal long-term risk for most people.',
    currentColor:'#84cc16',
    effects:[
      {icon:'🦴', title:'Good Mineral Balance', desc:'Water here is slightly mineral-rich but still beneficial. Calcium and magnesium intake is well within healthy ranges. No mineral deficiency risk.'},
      {icon:'🫁', title:'Mild Scale Build-up in Appliances', desc:'At the upper end (250–300 ppm), you may notice light scaling in kettles and geysers. This is cosmetic and manageable. The same minerals that create scale are healthy for you.'},
      {icon:'💧', title:'No Significant Health Risk', desc:'WHO considers water up to 300 ppm well within safe limits. No documented long-term health effects at this TDS for the general population.'},
    ],
    longRun:'Long-term consumption at 151–300 ppm: no adverse health effects documented. Your kidneys efficiently process this mineral load. The only concern is hard water scaling in appliances — not your body.',
    prevention:'UV+UF is all you need. RO at this TDS level is wasteful — it strips your good minerals and wastes 3–4 litres of water per litre purified. Save your money and your water.'
  },
  {
    id:3,
    current:'⚠️ Your water at 301–500 ppm is approaching BIS limits. Long-term consumption without filtration carries moderate health risk.',
    currentColor:'#eab308',
    effects:[
      {icon:'🫀', title:'Cardiovascular Strain (Sodium)', desc:'Water above 300 ppm often contains elevated sodium and chlorides. Long-term excess sodium intake is directly linked to hypertension (high blood pressure) — a leading cause of stroke and heart disease in India.'},
      {icon:'🪨', title:'Kidney Stone Formation', desc:'Excess calcium and magnesium salts above 300 ppm significantly increase the risk of calcium oxalate kidney stones with daily consumption over 2–5 years. This is one of the most common conditions linked to hard water.'},
      {icon:'🏠', title:'Scaling & Appliance Damage', desc:'Visible scaling in pipes, geysers, and washing machines. Water heater efficiency drops by 15–20% per year. Estimated annual appliance damage: ₹5,000–₹15,000 per household.'},
      {icon:'🤢', title:'Taste & GI Discomfort', desc:'Above 300 ppm, water often has a mineral or slightly bitter taste. Some individuals — particularly those with sensitive stomachs or IBS — report increased GI discomfort when drinking unfiltered water at this level.'},
    ],
    longRun:'After 5–10 years of daily unfiltered consumption at 300–500 ppm: significantly elevated kidney stone risk, hypertension development (especially with high-sodium sources), and digestive issues in sensitive individuals.',
    prevention:'RO is recommended. A TDS controller (MTDS) is MANDATORY to maintain output at 100–150 ppm — without it, RO will strip all minerals and create a different deficiency problem.'
  },
  {
    id:4,
    current:'🚨 Your water at 501–900 ppm significantly exceeds WHO and BIS limits. Consuming this water unfiltered poses serious long-term health risks.',
    currentColor:'#f97316',
    effects:[
      {icon:'🫀', title:'Hypertension & Heart Disease', desc:'Sodium and chloride concentrations at 500+ ppm directly contribute to elevated blood pressure. Studies from WHO South-East Asia show communities drinking 600–900 ppm borewell water have 2–3x higher hypertension rates than those on filtered supply.'},
      {icon:'🪨', title:'Kidney Stones — High Risk', desc:'Calcium and magnesium concentrations at this TDS level massively increase calcium oxalate stone formation. Urological surveys of rural India show kidney stone prevalence of 12–17% in communities with borewell TDS of 600–900 ppm.'},
      {icon:'🧪', title:'Heavy Metal Accumulation Risk', desc:'Water at this TDS level in India often contains fluoride, nitrates, and arsenic in addition to high mineral content. These do not show on a TDS meter. Long-term exposure to fluoride above 1.5 ppm causes skeletal fluorosis. Arsenic above 0.01 ppm is carcinogenic.'},
      {icon:'🦷', title:'Dental & Skeletal Fluorosis', desc:'Fluoride occurs naturally in borewell water across many Indian states at 500+ ppm. Daily consumption above 1.5 ppm fluoride causes mottled teeth in children and skeletal deformities in adults. RO removes 90–96% of fluoride.'},
      {icon:'🧬', title:'Long-term Organ Stress', desc:'The kidneys must work significantly harder to filter excess dissolved solids. Over 10–20 years, this is associated with chronic kidney disease (CKD), premature renal decline, and reduced kidney function — especially common in agricultural communities using borewell water.'},
    ],
    longRun:'10+ years of unfiltered consumption at 500–900 ppm: high clinical probability of kidney stones, confirmed hypertension, possible fluorosis, and elevated CKD risk. This is the most common source of preventable kidney disease in India\'s borewell-dependent states.',
    prevention:'RO is mandatory. A mineralizer and TDS controller are both required — RO will reduce your water to near-zero minerals, so you must add minerals back. The investment in a good RO pays back in medical savings within 2–3 years.'
  },
  {
    id:5,
    current:'🚨 SEVERE RISK. Your water at 901–1500 ppm is dangerously contaminated. Do not consume unfiltered. Long-term exposure is clinically harmful.',
    currentColor:'#dc2626',
    effects:[
      {icon:'🫀', title:'Severe Hypertension & Cardiac Events', desc:'Sodium levels at this TDS often exceed 400–600 mg/L, far beyond the WHO limit of 200 mg/L. Consistent daily consumption correlates with early-onset hypertension, left ventricular hypertrophy, and elevated stroke risk within 5–10 years.'},
      {icon:'🪨', title:'Kidney Damage — Chronic Risk', desc:'The renal tubules face extreme stress filtering water at 1000+ ppm. Clinical research documents significantly accelerated kidney stone formation and early markers of chronic kidney disease in populations on this water supply.'},
      {icon:'⚗️', title:'Fluoride Poisoning — Skeletal Fluorosis', desc:'Borewell water at 900–1500 ppm in Rajasthan, Gujarat, Bihar, and UP frequently contains fluoride of 3–8 ppm (WHO safe limit: 1.5 ppm). This causes dental fluorosis in children within 2–3 years, and crippling skeletal fluorosis in adults within 10 years.'},
      {icon:'🧪', title:'Arsenic & Nitrate Contamination', desc:'Water at this TDS level in industrial or agricultural areas often carries arsenic (carcinogenic above 0.01 ppm), nitrates (harmful above 45 mg/L, causes "blue baby syndrome" in infants), and industrial heavy metals. These are invisible in a TDS reading.'},
      {icon:'🧬', title:'Gastrointestinal & Metabolic Effects', desc:'Chronic high-mineral water consumption disrupts electrolyte balance, causing persistent digestive issues, bloating, and acid reflux. Magnesium excess can cause diarrhoea; excess sulphates cause laxative effects. Long-term metabolic disruption is well-documented.'},
    ],
    longRun:'Clinical outcomes expected within 5–15 years at 900–1500 ppm without filtration: kidney stones (>30% probability), hypertension requiring medication, fluorosis symptoms if fluoride is elevated, and heightened cancer risk if arsenic is present. Get a lab test immediately.',
    prevention:'Heavy-duty RO is urgently required. Mineralizer is mandatory. Also strongly recommended: a professional water lab test (₹1,500–₹3,000) to test specifically for fluoride, arsenic, and nitrates — none of these show on your TDS meter.'
  },
  {
    id:6,
    current:'⛔ EXTREMELY UNSAFE. Water at 1500+ ppm is completely unsuitable for any household use without commercial treatment.',
    currentColor:'#7f1d1d',
    effects:[
      {icon:'☠️', title:'Acute and Chronic Toxicity', desc:'Water at 1500+ ppm almost certainly contains multiple contaminants at toxic concentrations. This is beyond hard water — this is contaminated water. No home RO system is designed or certified for this input level.'},
      {icon:'🫀', title:'Extreme Cardiovascular & Renal Risk', desc:'Sodium and salt concentrations at this level can cause acute dehydration paradoxically — your body needs to use more water to process the salt than the water provides. Long-term: near-certain hypertension, renal failure, and electrolyte disorders.'},
      {icon:'⚗️', title:'Multi-contaminant Exposure', desc:'At 1500+ ppm, water is typically impacted by saltwater intrusion, heavy industrial discharge, or extreme geological contamination. Expect arsenic, fluoride, nitrates, heavy metals, and sulphates all simultaneously.'},
    ],
    longRun:'Do not wait to see long-term effects. Water at this level should not be consumed at all without commercial-grade treatment. Contact your municipal authority and Jal Jeevan Mission (1800-180-5555) immediately. This is a public health emergency for your household.',
    prevention:'A standard home RO purifier will fail and cannot help here. You need a commercial or industrial RO system. Contact a certified water treatment specialist. Do not delay.'
  }
];

// ── RO DECISION DATA ──
const roSciencePoints = [
  {icon:'🔬', title:'What RO actually does to water', desc:'Reverse osmosis forces water through a semi-permeable membrane at 0.0001 microns. It removes 95–99% of ALL dissolved solids — both harmful ones (sodium, arsenic, fluoride, nitrates) AND beneficial ones (calcium, magnesium). It does not distinguish between good and bad minerals.'},
  {icon:'💧', title:'Why RO on low TDS water is harmful', desc:'If your water is already at 51–300 ppm (ideal or good range), RO pushes output to 10–40 ppm. At this level, water actively leaches minerals from your body and pipes. WHO formally warns against drinking demineralised water without remineralisation. A ₹800 mineralizer cartridge could prevent this — but most people skip it.'},
  {icon:'📊', title:'Why UV+UF is better than RO below 300 ppm', desc:'UV kills 99.99% of bacteria and viruses. UF (0.01 micron) removes bacteria, protozoa, cysts, and suspended particles — without removing any dissolved minerals. Together, UV+UF achieves the same microbial safety as RO with zero water waste, zero mineral removal, and lower cost. At 50–300 ppm, RO provides no additional safety benefit.'},
  {icon:'🚫', title:'Why NOT using RO above 500 ppm is harmful', desc:'Above 500 ppm, your water contains dissolved salts, hardness minerals, and possibly fluoride, arsenic, or nitrates. These cannot be removed by UV, UF, activated carbon, or sediment filters — only RO removes dissolved solids. UV+UF-only systems at 500+ ppm give false security: the water is microbiologically safe but chemically unsafe.'},
  {icon:'💦', title:'Water waste — the real cost of unnecessary RO', desc:'A standard RO wastes 3–5 litres per litre purified. A family using 10L/day of RO water wastes 30–50 litres daily. Over a year, that\'s 11,000–18,000 litres of water wasted. In a drought-stressed country like India, using RO on water that doesn\'t need it is an environmental harm, not just unnecessary spending.'},
  {icon:'🏭', title:'The mineralizer problem — why most ROs fail users', desc:'If you use RO without a TDS controller (MTDS) or mineralizer, output water is typically 10–30 ppm — clinically demineralised. Surveys show fewer than 30% of Indian RO users have a functioning MTDS valve or mineralizer. Most people are drinking mineral-stripped water daily without knowing it, regardless of whether their TDS justified RO in the first place.'},
];

// ── HEAVY METALS DATA BY ZONE ──
const heavyMetalsData = [
  {
    id:0, tdsRange:'0–50 ppm',
    paradox:'⚠️ CRITICAL PARADOX: Your water has almost no dissolved solids — but this tells you nothing about heavy metals. Ultra-low TDS water is often more dangerous for heavy metals because it is more chemically reactive.',
    paradoxColor:'#3b82f6',
    whyDangerous:'Demineralised and ultra-soft water is chemically aggressive. It leaches lead, copper, cadmium, and other metals from pipes, solder joints, and storage tanks far more aggressively than hard water. Your TDS meter showing "0–50 ppm" cannot distinguish between clean water and water that has absorbed lead from your building\'s plumbing.',
    commonMetals:['lead','arsenic','copper','cadmium'],
    filters:[
      {name:'KDF-55 filter media', desc:'Reduces lead, mercury, copper, and cadmium via redox reaction. Specifically designed for soft/low-TDS water where these metals are most mobile.', life:'Replace every 6–12 months'},
      {name:'NSF/ANSI 53-certified activated carbon block', desc:'Certified carbon blocks (not generic GAC) can reduce lead by 99% and are specifically rated for low-TDS water where lead is most soluble.', life:'Replace every 6–9 months'},
      {name:'Whole-house sediment pre-filter', desc:'Captures pipe scale and particulate heavy metals before they reach your tap. Essential if your building has old galvanised or lead-soldered pipes.', life:'Replace every 2–3 months'},
      {name:'Post-RO activated carbon (if RO is present)', desc:'Post-RO carbon polishing removes any volatile organics and residual metals not caught by the RO membrane.', life:'Replace every 12 months'},
    ]
  },
  {
    id:1, tdsRange:'51–150 ppm',
    paradox:'✅ GOOD NEWS: Your water is in the ideal TDS zone. However, ideal TDS does not mean heavy-metal-free. Old pipes in your building or locality can still introduce lead and copper regardless of source water quality.',
    paradoxColor:'#22c55e',
    whyDangerous:'Municipal water sources in most Indian cities are treated and safe from source. The contamination risk in the 51–150 ppm range is almost entirely from distribution — old galvanised pipes, lead-soldered joints in pre-1990 buildings, and storage tanks that haven\'t been cleaned. Your TDS meter will not show this.',
    commonMetals:['lead','copper','zinc'],
    filters:[
      {name:'NSF/ANSI 53-certified carbon block', desc:'Certified for lead reduction. If your building is older than 1990, this is a worthwhile addition to your UV+UF system.', life:'Replace every 6–9 months'},
      {name:'KDF-55 media (optional)', desc:'Add to your existing filter setup if you suspect lead from old pipes. Works well at low TDS.', life:'Replace every 12 months'},
    ]
  },
  {
    id:2, tdsRange:'151–300 ppm',
    paradox:'ℹ️ Your TDS is in the good range, but municipal water in this range across India can still carry lead and copper from ageing distribution infrastructure.',
    paradoxColor:'#84cc16',
    whyDangerous:'Indian cities built before 1990 used galvanised iron or lead-soldered copper pipes. Even when source water is clean at 150–300 ppm, these metals dissolve into water during distribution. WHO estimates that 30–40% of lead exposure in urban India comes from plumbing, not source water.',
    commonMetals:['lead','copper','zinc'],
    filters:[
      {name:'NSF 53-certified carbon block (pre-filter)', desc:'Independently certified for lead and copper reduction. Add to your UV+UF system as a pre-filter stage.', life:'Replace every 6–9 months'},
      {name:'KDF-55 inline filter', desc:'Good supplementary protection for lead and mercury in well-maintained distribution areas.', life:'Replace every 12 months'},
    ]
  },
  {
    id:3, tdsRange:'301–500 ppm',
    paradox:'⚠️ Your water\'s borderline TDS can mask heavy metals. Borewell water in the 300–500 ppm range across India commonly contains arsenic, fluoride, and iron — none of which appear differently on a TDS meter.',
    paradoxColor:'#eab308',
    whyDangerous:'Semi-urban borewell water at 300–500 ppm in India\'s gangetic plains, eastern states, and southern agricultural zones frequently contains arsenic (from geological deposits), iron, and manganese at levels exceeding WHO limits. A TDS of 400 ppm could be 400 ppm of safe calcium and magnesium — or it could include arsenic, iron, and manganese within those same dissolved solids.',
    commonMetals:['arsenic','iron','manganese','fluoride','lead'],
    filters:[
      {name:'RO membrane (0.0001 micron)', desc:'Removes 90–96% of arsenic (As V form), 85–92% of arsenic As III with proper pre-oxidation, and near-100% of fluoride. Essential if arsenic is a concern in your area.', life:'Replace every 2–3 years'},
      {name:'Iron/manganese removal filter (Birm or KMnO₄ media)', desc:'Specifically targets dissolved iron and manganese that standard carbon filters cannot remove. Essential for reddish or yellowish water.', life:'Backwash monthly, replace media every 2–3 years'},
      {name:'NSF 58-certified RO system', desc:'NSF 58 certification specifically tests and certifies arsenic, fluoride, and heavy metal reduction. Choose this over uncertified Chinese-made RO membranes.', life:'Membrane: 2–3 years; pre-filters: 3–6 months'},
    ]
  },
  {
    id:4, tdsRange:'501–900 ppm',
    paradox:'🚨 HIGH RISK: At 500–900 ppm borewell water in India, heavy metal and contaminant co-occurrence is extremely common. Your TDS meter showing 700 ppm tells you NOTHING about whether arsenic, fluoride, or chromium are present.',
    paradoxColor:'#f97316',
    whyDangerous:'CGWB (Central Ground Water Board) data shows that borewell water at 500–900 ppm across Rajasthan, Gujarat, Haryana, UP, Bihar, and parts of Andhra Pradesh regularly contains: fluoride 3–10 ppm (WHO limit: 1.5), arsenic 0.02–0.5 ppm (WHO limit: 0.01), iron 1–10 mg/L (WHO limit: 0.3), and nitrates 50–200 mg/L (WHO limit: 50). A TDS meter cannot detect any of these specifically.',
    commonMetals:['arsenic','fluoride','chromium','lead','iron','nitrates'],
    filters:[
      {name:'NSF 58-certified RO membrane (75–80 GPD)', desc:'Removes 95–99% of arsenic, 90–96% of fluoride, 97–99% of chromium, and 85–95% of nitrates. This is the most critical stage for heavy metal removal at this TDS.', life:'Replace every 1.5–2 years'},
      {name:'Activated alumina pre-filter (for high fluoride areas)', desc:'Specifically designed for high-fluoride water. Reduces fluoride from 5–10 ppm down to 0.5–1 ppm before RO stage, extending membrane life and improving fluoride removal efficiency.', life:'Replace every 6–9 months'},
      {name:'Iron removal pre-filter (Birm media)', desc:'Essential if iron is above 1 mg/L. Oxidises and captures dissolved iron before it reaches carbon filters and RO membrane. Iron severely reduces RO membrane life.', life:'Backwash monthly; media every 2–3 years'},
      {name:'KDF-85 media (iron and hydrogen sulphide)', desc:'For high-iron borewell water. KDF-85 is specifically formulated for reducing iron, hydrogen sulphide (causes rotten-egg smell), and scale in high-TDS water.', life:'Replace every 12–18 months'},
      {name:'Post-RO activated carbon block (NSF 53)', desc:'Final stage for any organic compounds and volatile chemicals not fully removed by RO. Especially important in areas with agricultural runoff contamination.', life:'Replace every 12 months'},
    ]
  },
  {
    id:5, tdsRange:'901–1500 ppm',
    paradox:'🚨 EXTREME RISK: At 901–1500 ppm, the probability of heavy metal co-contamination in Indian groundwater is very high. This water requires a full lab test — a TDS meter is dangerously insufficient at this level.',
    paradoxColor:'#dc2626',
    whyDangerous:'At 900–1500 ppm in India, you are likely in a zone with extreme geological or industrial contamination. CGWB and NEERI studies document fluoride at 5–18 ppm, arsenic at 0.1–1.5 ppm (100x WHO limit), chromium VI (industrial carcinogen), cadmium, and lead in groundwater across multiple Indian states at this TDS level. Any of these can be lethal with long-term exposure. Get a full lab test immediately.',
    commonMetals:['arsenic','fluoride','chromium_VI','cadmium','lead','mercury','nitrates'],
    filters:[
      {name:'NSF 58-certified high-rejection RO membrane (99%+, 75 GPD)', desc:'Must be rated for 1200+ ppm input with 99%+ rejection. Standard membranes degrade rapidly at this TDS. Essential baseline for all heavy metal removal.', life:'Replace every 12–18 months'},
      {name:'Activated alumina stage (pre-RO)', desc:'At this fluoride concentration, a dedicated alumina stage before RO is critical. Standard carbon pre-filters cannot reduce fluoride.', life:'Replace every 4–6 months'},
      {name:'Iron & arsenic removal media (GFO — Granular Ferric Oxide)', desc:'GFO media has exceptional arsenic adsorption capacity. For arsenic concentrations above 0.1 ppm, this dedicated stage before RO significantly improves arsenic removal and extends membrane life.', life:'Replace every 6–9 months (test quarterly)'},
      {name:'Professional UV-C system (post-RO, 40 mJ/cm²)', desc:'High-intensity UV after RO ensures no pathogen survival, especially important at this contamination level where microbial risk is also elevated.', life:'Replace lamp every 12 months'},
    ]
  },
  {
    id:6, tdsRange:'1500+ ppm',
    paradox:'⛔ BEYOND HOME TESTING: At 1500+ ppm, your water may contain industrial pollutants, heavy metals at acutely toxic concentrations, and multiple simultaneous contaminants. No home TDS meter, filter, or standard RO system is designed for this.',
    paradoxColor:'#7f1d1d',
    whyDangerous:'Water at 1500+ ppm in India is almost certainly impacted by saltwater intrusion (coastal areas), heavy industrial discharge (mining, chemical, textile zones), or extreme geological contamination. At this level, even industrial-grade RO systems require professional monitoring to maintain water safety. Contact government authorities immediately.',
    commonMetals:['all_industrial','arsenic','mercury','cadmium','chromium_VI','lead','cyanide'],
    filters:[
      {name:'Commercial multi-stage RO system (25–50 LPH)', desc:'No standard home RO can process water at this TDS. A commercial or industrial system with pre-treatment (softening + iron removal) and post-treatment is required.', life:'Professional service contract required'},
      {name:'Activated carbon bulk system', desc:'Industrial-scale activated carbon treatment for organic compound and heavy metal removal as a supplementary stage to commercial RO.', life:'Professional service contract required'},
    ]
  }
];

const heavyMetalsList = [
  {icon:'⚗️', name:'Arsenic', detail:'Common in: West Bengal, Bihar, UP, Rajasthan borewell water. WHO limit: 0.01 ppm. Causes skin lesions, blackfoot disease, and multiple cancers. Colourless and tasteless — completely invisible.', riskLevel:'high'},
  {icon:'🔩', name:'Lead', detail:'Common from: ageing pipes, solder joints in buildings built before 1990. WHO limit: 0.01 ppm. Causes neurological damage in children, hypertension, kidney damage in adults. No safe level for children.', riskLevel:'high'},
  {icon:'🟡', name:'Fluoride', detail:'Common in: Rajasthan, Gujarat, AP, Telangana, MP borewell water. WHO limit: 1.5 ppm. Causes dental and skeletal fluorosis. Many areas exceed 5 ppm naturally.', riskLevel:'high'},
  {icon:'🔴', name:'Iron', detail:'Common in: across India borewell water. WHO limit: 0.3 mg/L (aesthetic). Causes rust taste, staining, and at high levels (>5 mg/L) liver damage and haemochromatosis with chronic exposure.', riskLevel:'med'},
  {icon:'⬛', name:'Chromium VI', detail:'Common near: industrial zones, leather tanning areas (Kanpur, Unnao). WHO limit: 0.05 ppm. Hexavalent chromium is a proven carcinogen (same compound from the Erin Brockovich case).', riskLevel:'high'},
  {icon:'🩶', name:'Cadmium', detail:'Common near: battery manufacturing, fertiliser production, mining areas. WHO limit: 0.003 ppm. Accumulates in kidneys over decades, causing irreversible renal damage.', riskLevel:'high'},
  {icon:'🌫️', name:'Mercury', detail:'Common near: chlor-alkali plants, thermometer manufacturing areas. WHO limit: 0.006 ppm. Neurological toxin. Bioaccumulates — long-term exposure causes tremors, memory loss, kidney damage.', riskLevel:'med'},
];

function renderResults(tds, z){
  const whoClass = z.whoPass; const bisClass = z.bisPass;
  const hmData = heavyMetalsData.find(h=>h.id===z.id)||heavyMetalsData[3];

  const commonMetalTags = hmData.commonMetals.map(m=>`<span style="background:rgba(167,139,250,0.12);color:#c4b5fd;border:1px solid rgba(167,139,250,0.3);padding:2px 9px;border-radius:50px;font-size:0.7rem;font-weight:500;">${m}</span>`).join('');

  document.getElementById('results').innerHTML=`
    <div class="quality-pill" style="background:${z.color}18;color:${z.color};border-color:${z.color}40;">
      <span class="pill-dot" style="background:${z.color}"></span>
      TDS ${tds} ppm — ${z.label}
    </div>
    <div class="standards-row">
      <span class="std-chip ${whoClass}">${z.who}</span>
      <span class="std-chip ${bisClass}">${z.bis}</span>
    </div>
    <p class="res-desc">${z.desc}</p>
    <div class="alert-banner" style="background:${z.alertBg};border-left-color:${z.alertColor};color:${z.alertColor}dd;">${z.alert}</div>

    <div class="metrics-grid">
      <div class="metric-card"><div class="metric-val">${z.stageCount}</div><div class="metric-lbl">Filtration stages</div></div>
      <div class="metric-card"><div class="metric-val" style="color:var(--teal);font-size:0.9rem;">${z.outputTds}</div><div class="metric-lbl">Target output TDS</div></div>
      <div class="metric-card"><div class="metric-val" style="color:${z.id>=3?'#f97316':'var(--green)'};">${z.waste}</div><div class="metric-lbl">Water waste estimate</div></div>
    </div>

    <div class="action-btns-row">
      <button class="action-btn btn-teal" onclick="togglePanel('filterPanel', ${z.id}, ${tds})">
        <span class="abn-icon">🔍</span>
        <span class="abn-text">
          <div class="abn-title">Compare Filters & Prices</div>
          <div class="abn-sub">Stage-by-stage cost, lifespan & buy links</div>
        </span>
        <span class="abn-arrow" id="filterArrow">→</span>
      </button>
      <button class="action-btn btn-red" onclick="togglePanel('healthPanel', ${z.id}, ${tds})">
        <span class="abn-icon">🫀</span>
        <span class="abn-text">
          <div class="abn-title">Long-term Health Effects</div>
          <div class="abn-sub">What happens to your body over 5–20 years</div>
        </span>
        <span class="abn-arrow" id="healthArrow">→</span>
      </button>
      <button class="action-btn btn-yellow" onclick="togglePanel('roPanel', ${z.id}, ${tds})">
        <span class="abn-icon">⚗️</span>
        <span class="abn-text">
          <div class="abn-title">To RO or Not to RO?</div>
          <div class="abn-sub">Science of when RO helps vs harms</div>
        </span>
        <span class="abn-arrow" id="roArrow">→</span>
      </button>
      <button class="action-btn btn-purple" onclick="togglePanel('hmFiltersPanel', ${z.id}, ${tds})">
        <span class="abn-icon">🧪</span>
        <span class="abn-text">
          <div class="abn-title">Heavy Metal Filters</div>
          <div class="abn-sub">Filters for your TDS if heavy metals present</div>
        </span>
        <span class="abn-arrow" id="hmFiltersArrow">→</span>
      </button>
    </div>

    <!-- FILTER COMPARISON PANEL -->
    <div class="expand-panel" id="filterPanel">
      <div class="panel-header">
        <div class="panel-title">🔍 Filter Comparison — Stage by Stage</div>
        <button class="panel-close" onclick="togglePanel('filterPanel', ${z.id}, ${tds})">✕</button>
      </div>
      <div class="panel-body">
        <div style="font-size:0.78rem;color:var(--muted);margin-bottom:1rem;">Exact stages needed for your TDS level · Price estimates · Annual replacement cost · Buy links</div>
        <div class="stage-compare-wrap">
          <table class="stage-compare-table">
            <thead><tr><th>#</th><th>Filter Stage</th><th>Replace Every</th><th>Est. Cost/Replace</th><th>Annual Cost</th><th>Status</th></tr></thead>
            <tbody>
              ${z.stages.map((s,i)=>{
                const stageCosts={
                  'Sediment':['₹80–150','₹240–600'],
                  'Activated carbon (GAC)':['₹200–400','₹200–600'],
                  'Carbon block':['₹200–400','₹400–800'],
                  'RO membrane':['₹600–2,000','₹250–1,000'],
                  'TDS controller':['₹300–600','₹100–300'],
                  'UV lamp':['₹500–1,200','₹500–1,200'],
                  'UF membrane':['₹500–1,500','₹200–750'],
                  'Mineralizer':['₹300–700','₹600–2,100'],
                  'Post carbon':['₹150–300','₹150–300'],
                  'Water softener':['Varies','₹2,000–5,000/yr'],
                  'Commercial':['Professional','₹8,000–15,000/yr'],
                  'Whole-house':['₹500–1,500','₹3,000–9,000/yr'],
                };
                let cost=['₹200–400','₹400–800'];
                for(const [k,v] of Object.entries(stageCosts)){
                  if(s.name.toLowerCase().includes(k.toLowerCase())){cost=v;break;}
                }
                const searchQ=encodeURIComponent(s.name+' water filter India');
                const amzLink=`https://www.amazon.in/s?k=${searchQ}`;
                const flipLink=`https://www.flipkart.com/search?q=${searchQ}`;
                return `<tr>
                  <td style="color:var(--teal);font-weight:700;">${i+1}</td>
                  <td>
                    <div style="font-weight:600;font-size:0.84rem;">${s.name}</div>
                    <div style="font-size:0.74rem;color:var(--muted);margin-top:2px;">${s.why}</div>
                    <div style="display:flex;gap:5px;margin-top:5px;">
                      <a href="${amzLink}" target="_blank" class="shop-link amz">Amazon</a>
                      <a href="${flipLink}" target="_blank" class="shop-link flip">Flipkart</a>
                    </div>
                  </td>
                  <td><span class="life-badge">${s.life}</span></td>
                  <td style="font-weight:600;font-size:0.84rem;">${cost[0]}</td>
                  <td style="color:var(--muted);font-size:0.8rem;">${cost[1]}</td>
                  <td><span class="${s.req?'req-badge-r':'req-badge-o'}">${s.req?'Required':'Optional'}</span>${s.special?'<span class="tag tag-special" style="margin-left:4px;">mineral critical</span>':''}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
        ${z.minNote?`<div class="mineralizer-banner" style="margin-top:1rem;">⚠ ${z.minNote}</div>`:''}
        <div style="margin-top:1.25rem;">
          <div class="res-section-title">Purifier Brand Comparison — India 2025–26 Prices</div>
          <div class="filter-compare-grid">
            ${z.brands.map(b=>{
              const bSearch=encodeURIComponent(b.name+' water purifier');
              return `<div class="filter-row ${b.best?'best-row':''}">
                <div>
                  <div class="fr-name">${b.name}${b.best?'<span class="best-pill">Best Pick</span>':''}</div>
                  <div class="fr-specs">
                    <span class="fr-spec"><span class="fr-spec-icon">💧</span> Waste: ${b.waste}</span>
                    <span class="fr-spec"><span class="fr-spec-icon">🔧</span> AMC: ${b.amc}</span>
                  </div>
                  <div class="fr-links">
                    <a href="https://www.amazon.in/s?k=${encodeURIComponent(b.name)}" target="_blank" class="shop-link amz">Amazon</a>
                    <a href="https://www.flipkart.com/search?q=${encodeURIComponent(b.name)}" target="_blank" class="shop-link flip">Flipkart</a>
                    <a href="https://www.google.com/search?q=${encodeURIComponent(b.name+' price India 2025')}" target="_blank" class="shop-link goog">Google</a>
                  </div>
                </div>
                <div>
                  <div class="fr-price">${b.price}</div>
                  <div class="fr-amc">/yr AMC</div>
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>
        <div class="compare-note">💡 Prices shown are estimated ranges from Amazon India, Flipkart, and authorised dealer listings (2025–26). Click the Buy links above to see live prices. AMC = Annual Maintenance Contract covering filter replacement and service visits.</div>
      </div>
    </div>

    <!-- HEALTH IMPACT PANEL -->
    <div class="expand-panel" id="healthPanel">
      <div class="panel-header">
        <div class="panel-title">🫀 Long-term Health Effects at TDS ${tds} ppm</div>
        <button class="panel-close" onclick="togglePanel('healthPanel', ${z.id}, ${tds})">✕</button>
      </div>
      <div class="panel-body">
        ${(()=>{
          const hd = healthData.find(h=>h.id===z.id)||healthData[3];
          return `
          <div class="health-highlight" style="background:${hd.currentColor}12;border-left-color:${hd.currentColor};color:${hd.currentColor}dd;margin-bottom:1.5rem;">
            ${hd.current}
          </div>
          <div class="health-section-title">📋 Documented Health Effects Over Time</div>
          ${hd.effects.map(e=>`
            <div style="display:flex;gap:10px;align-items:flex-start;padding:0.9rem 0;border-bottom:1px solid var(--border);">
              <div style="font-size:1.3rem;flex-shrink:0;">${e.icon}</div>
              <div>
                <div style="font-weight:600;font-size:0.9rem;margin-bottom:3px;">${e.title}</div>
                <div style="font-size:0.82rem;color:rgba(255,255,255,0.68);line-height:1.55;">${e.desc}</div>
              </div>
            </div>`).join('')}
          <div class="health-highlight" style="background:rgba(245,196,0,0.07);border-left-color:#f5c400;color:rgba(245,196,0,0.9);margin-top:1.25rem;">
            <strong>🕐 Long-run outlook:</strong> ${hd.longRun}
          </div>
          <div class="health-highlight" style="background:rgba(0,201,167,0.07);border-left-color:var(--teal);color:rgba(0,201,167,0.9);margin-top:0.75rem;">
            <strong>✅ Prevention:</strong> ${hd.prevention}
          </div>
          <div style="margin-top:1.25rem;padding:1rem;background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:12px;">
            <div style="font-size:0.72rem;font-weight:600;color:var(--teal);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.75rem;">How does your TDS compare to other zones?</div>
            <div class="health-range-grid">
              ${[
                {r:'0–50',l:'Dangerously Low',c:'#3b82f6',t:'Mineral deficiency, leaches Ca/Mg'},
                {r:'51–150',l:'Ideal Zone',c:'#22c55e',t:'Best long-term health outcomes'},
                {r:'151–300',l:'Good',c:'#84cc16',t:'No significant health risk'},
                {r:'301–500',l:'Acceptable',c:'#eab308',t:'Kidney stone risk over 5+ yrs'},
                {r:'501–900',l:'Poor',c:'#f97316',t:'Hypertension, renal stress'},
                {r:'901–1500',l:'Very Poor',c:'#dc2626',t:'Severe: fluorosis, CKD risk'},
                {r:'1500+',l:'Unsafe',c:'#7f1d1d',t:'Acute toxicity risk'},
              ].map(h=>`
                <div class="health-card" style="background:${h.c}10;border-color:${h.c}30;">
                  <div class="health-card-title" style="color:${h.c};">${h.l}</div>
                  <div class="health-card-tds">${h.r} ppm</div>
                  <div class="health-card-body">${h.t}</div>
                </div>`).join('')}
            </div>
          </div>`;
        })()}
      </div>
    </div>

    <!-- RO DECISION PANEL -->
    <div class="expand-panel" id="roPanel">
      <div class="panel-header">
        <div class="panel-title">⚗️ To RO or Not to RO — The Full Science</div>
        <button class="panel-close" onclick="togglePanel('roPanel', ${z.id}, ${tds})">✕</button>
      </div>
      <div class="panel-body">
        <div class="ro-split">
          <div class="ro-card" style="background:rgba(255,77,77,0.06);border-color:rgba(255,77,77,0.25);">
            <div class="ro-card-title" style="color:#ff7f7f;">🚫 RO at Low TDS (&lt;300 ppm)</div>
            <div class="ro-card-body">
              What happens to your water:
              <ul>
                <li>RO reduces output to 10–40 ppm</li>
                <li>Removes calcium and magnesium your body needs</li>
                <li>Creates "hungry water" that leaches minerals</li>
                <li>Wastes 30–50 L/day for a typical family</li>
                <li>Increases pipe corrosion and heavy metal leaching</li>
              </ul>
              <br>What happens to your body:
              <ul>
                <li>Increased fracture and bone density risk</li>
                <li>Hyponatremia risk with very high consumption</li>
                <li>Magnesium deficiency — fatigue, cramps, arrhythmia</li>
                <li>Higher heavy metal exposure from reactive water</li>
              </ul>
            </div>
          </div>
          <div class="ro-card" style="background:rgba(249,115,22,0.06);border-color:rgba(249,115,22,0.25);">
            <div class="ro-card-title" style="color:#fb923c;">⚠️ No RO at High TDS (&gt;500 ppm)</div>
            <div class="ro-card-body">
              What stays in your water:
              <ul>
                <li>Excess sodium, chlorides, sulphates</li>
                <li>Potentially fluoride above 1.5 ppm</li>
                <li>Potentially arsenic, nitrates, heavy metals</li>
                <li>High hardness mineral load</li>
                <li>UV/UF CANNOT remove any of the above</li>
              </ul>
              <br>What happens to your body:
              <ul>
                <li>Hypertension from excess sodium</li>
                <li>Kidney stones from excess calcium oxalate</li>
                <li>Fluorosis risk (skeletal + dental)</li>
                <li>Chronic kidney disease over 10–20 years</li>
                <li>Cancer risk if arsenic is present</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="margin-top:1.25rem;padding:1rem 1.1rem;border-radius:12px;background:${z.id<=2?'rgba(34,197,94,0.08)':z.id<=3?'rgba(234,179,8,0.08)':'rgba(249,115,22,0.08)'};border-left:3px solid ${z.id<=2?'#22c55e':z.id<=3?'#eab308':'#f97316'};font-size:0.9rem;line-height:1.6;color:rgba(255,255,255,0.85);">
          <strong style="color:${z.id<=2?'#22c55e':z.id<=3?'#eab308':'#f97316'};">For your water at ${tds} ppm:</strong><br>
          ${z.id<=1?'✅ Your TDS is in the ideal range. RO is NOT recommended. UV + UF is the scientifically correct choice. Installing RO will actively harm your water quality unless you add a mineralizer and TDS controller — at which point you\'ve spent ₹15,000+ to recreate the water you already had.':z.id===2?'✅ Your TDS is good. RO is not needed. UV + UF protects you from all microbial risk while preserving all beneficial minerals. RO would strip your water and waste 30–50 litres daily for zero health benefit.':z.id===3?'⚠️ RO is recommended at your TDS level. A TDS controller (MTDS) is MANDATORY to set output to 100–150 ppm. Without it, RO produces near-zero mineral water which creates a different health problem.':'🚨 RO is mandatory at your TDS level. Dissolved salts, potential fluoride, and possible heavy metals cannot be removed by any other method. A mineralizer is also mandatory as RO will strip all minerals at this TDS level.'}
        </div>

        <div class="ro-science" style="margin-top:1.5rem;">
          <div class="res-section-title">The Science Behind Filter Recommendations</div>
          ${roSciencePoints.map(p=>`
            <div class="ro-science-row">
              <div class="ro-sci-icon">${p.icon}</div>
              <div class="ro-sci-body">
                <div class="ro-sci-title">${p.title}</div>
                <div class="ro-sci-desc">${p.desc}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- HEAVY METAL FILTERS PANEL -->
    <div class="expand-panel" id="hmFiltersPanel">
      <div class="panel-header">
        <div class="panel-title" style="color:#c4b5fd;">🧪 Heavy Metal Filter Guide — Your TDS Zone</div>
        <button class="panel-close" onclick="togglePanel('hmFiltersPanel', ${z.id}, ${tds})">✕</button>
      </div>
      <div class="panel-body">
        ${(()=>{
          const hm = heavyMetalsData.find(h=>h.id===z.id)||heavyMetalsData[3];
          const filtersHtml = hm.filters.map((f,i)=>`
            <div class="hm-filter-item">
              <div class="hm-filter-badge">${i+1}</div>
              <div class="hm-filter-body">
                <div class="hm-filter-name">${f.name}</div>
                <div class="hm-filter-desc">${f.desc}</div>
                <div class="hm-filter-life">⏱ ${f.life}</div>
                <div style="display:flex;gap:5px;margin-top:7px;">
                  <a href="https://www.amazon.in/s?k=${encodeURIComponent(f.name+' water filter')}" target="_blank" class="shop-link amz">Amazon</a>
                  <a href="https://www.flipkart.com/search?q=${encodeURIComponent(f.name+' water filter')}" target="_blank" class="shop-link flip">Flipkart</a>
                </div>
              </div>
            </div>`).join('');
          return `
          <div style="padding:0.9rem 1.1rem;border-radius:12px;background:${hm.paradoxColor}10;border-left:3px solid ${hm.paradoxColor};color:${hm.paradoxColor}dd;font-size:0.88rem;line-height:1.6;margin-bottom:1.25rem;">
            ${hm.paradox}
          </div>
          <div class="res-section-title">Why TDS Doesn't Show Heavy Metals</div>
          <div style="font-size:0.84rem;color:rgba(255,255,255,0.72);line-height:1.6;margin-bottom:1.25rem;">${hm.whyDangerous}</div>
          <div style="margin-bottom:1rem;">
            <div class="res-section-title">Metals Possible at Your TDS Range (${hm.tdsRange})</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">${hm.commonMetals.map(m=>`<span style="background:rgba(167,139,250,0.12);color:#c4b5fd;border:1px solid rgba(167,139,250,0.3);padding:3px 10px;border-radius:50px;font-size:0.76rem;font-weight:500;">${m}</span>`).join('')}</div>
          </div>
          <div class="res-section-title">Recommended Filters IF Heavy Metals Present</div>
          <div class="hm-filter-list">${filtersHtml}</div>
          <div class="hm-lab-banner">
            ⚠️ <strong>Get a lab test first.</strong> Filters for heavy metals are not one-size-fits-all. Arsenic, fluoride, iron, and lead each require different treatment methods. A professional water lab test costs ₹1,500–₹3,000 and tells you exactly what you have. Recommended labs: <strong>SGS India, Bureau Veritas, NABL-accredited local labs</strong>. Search "NABL water testing lab near me" or contact your state's Jal Board.
          </div>`;
        })()}
      </div>
    </div>

    <!-- HEAVY METALS AWARENESS CARD (always shown) -->
    <div class="heavy-metals-card">
      <div class="hm-header">
        <div class="hm-icon-wrap">🧪</div>
        <div class="hm-header-text">
          <div class="hm-title">TDS Meter ≠ Heavy Metal Safety</div>
          <div class="hm-subtitle">Your TDS reading tells you about dissolved solids — not about arsenic, lead, fluoride, or chromium. Here's what you're not seeing.</div>
        </div>
      </div>
      <div class="hm-body">
        <div class="hm-truth-grid">
          <div class="hm-truth-card" style="background:rgba(255,77,77,0.06);border-color:rgba(255,77,77,0.2);">
            <div class="hm-truth-label" style="color:#ff7f7f;">Low TDS ≠ Safe Water</div>
            <div class="hm-truth-body">Water at 50–200 ppm can contain arsenic at 50x the WHO limit, lead from old pipes, or industrial chromium — all completely invisible to a TDS meter. Low TDS just means few dissolved solids; it does not mean those solids are safe.</div>
          </div>
          <div class="hm-truth-card" style="background:rgba(245,196,0,0.06);border-color:rgba(245,196,0,0.2);">
            <div class="hm-truth-label" style="color:#f5c400;">High TDS ≠ Heavy Metals</div>
            <div class="hm-truth-body">Water at 800 ppm can be entirely calcium and magnesium (hard but not toxic), with zero arsenic or lead. High TDS is usually hard water — which needs filtration — but the specific dissolved solids matter far more than the total count.</div>
          </div>
        </div>
        <div style="font-size:0.82rem;color:var(--muted);line-height:1.6;margin-bottom:1rem;">
          Common heavy metals present in Indian groundwater — none detectable by TDS meter:
        </div>
        <div class="hm-metals-list">
          ${heavyMetalsList.slice(0,4).map(m=>`
            <div class="hm-metal-row">
              <div class="hm-metal-icon">${m.icon}</div>
              <div class="hm-metal-name">${m.name}</div>
              <div class="hm-metal-detail">${m.detail}</div>
              <div class="hm-metal-risk ${m.riskLevel==='high'?'risk-high':'risk-med'}">${m.riskLevel==='high'?'High Risk':'Med Risk'}</div>
            </div>`).join('')}
        </div>
        <div class="hm-cta-row">
          <button class="hm-btn" onclick="toggleHmMore()">
            <span>📋</span> <span id="hmMoreBtnText">Show All 7 Heavy Metals</span>
          </button>
          <button class="hm-btn" onclick="togglePanel('hmFiltersPanel', ${z.id}, ${tds});document.getElementById('hmFiltersPanel').scrollIntoView({behavior:'smooth'})">
            <span>🛡️</span> See Heavy Metal Filters for TDS ${tds}
          </button>
        </div>
        <div id="hmMoreList" style="display:none;margin-top:10px;">
          <div class="hm-metals-list">
            ${heavyMetalsList.slice(4).map(m=>`
              <div class="hm-metal-row">
                <div class="hm-metal-icon">${m.icon}</div>
                <div class="hm-metal-name">${m.name}</div>
                <div class="hm-metal-detail">${m.detail}</div>
                <div class="hm-metal-risk ${m.riskLevel==='high'?'risk-high':'risk-med'}">${m.riskLevel==='high'?'High Risk':'Med Risk'}</div>
              </div>`).join('')}
          </div>
        </div>
        <div style="margin-top:1rem;padding:0.85rem 1rem;border-radius:10px;background:rgba(167,139,250,0.06);border:1px solid rgba(167,139,250,0.2);font-size:0.8rem;color:rgba(196,181,253,0.8);line-height:1.55;">
          🔬 <strong>The only way to know:</strong> A certified NABL water lab test (₹1,500–₹3,000) tests for arsenic, lead, fluoride, chromium, iron, nitrates, and 20+ other parameters. This is the only reliable way to know if your water is truly safe, regardless of TDS level.
        </div>
      </div>
    </div>
  `;
}

function toggleHmMore(){
  const el=document.getElementById('hmMoreList');
  const btn=document.getElementById('hmMoreBtnText');
  const isHidden=el.style.display==='none';
  el.style.display=isHidden?'block':'none';
  btn.textContent=isHidden?'Hide Extra Metals':'Show All 7 Heavy Metals';
}

// ──────────────────────────────────────────────
//  STEP 1 ▸ Paste your Google Apps Script URL below
//  after you deploy it (see setup guide in comments)
// ──────────────────────────────────────────────
const GOOGLE_SHEET_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
//
// HOW TO GET THIS URL — full steps:
//
// 1. Go to https://sheets.google.com → create a new sheet
//    Name the columns in row 1:
//    Timestamp | Pincode | TDS | Zone | City | State
//
// 2. In the sheet click Extensions → Apps Script
//
// 3. Delete everything and paste this code:
//
//    function doPost(e) {
//      const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//      const data  = JSON.parse(e.postData.contents);
//      sheet.appendRow([
//        data.timestamp,
//        data.pincode,
//        data.tds,
//        data.zone,
//        data.city  || '',
//        data.state || ''
//      ]);
//      return ContentService
//        .createTextOutput(JSON.stringify({ result: 'success' }))
//        .setMimeType(ContentService.MimeType.JSON);
//    }
//
// 4. Click Deploy → New deployment
//    → Type: Web App
//    → Execute as: Me
//    → Who has access: Anyone
//    → Click Deploy → Copy the URL
//
// 5. Paste that URL above replacing 'YOUR_APPS_SCRIPT_URL_HERE'
// ──────────────────────────────────────────────

async function submitData(){
  const tds = parseInt(document.getElementById('tdsNum').value)||0;
  const pin = document.getElementById('pincode').value.trim();

  if(pin.length!==6){
    alert('Please enter a valid 6-digit pincode to save your data.');
    return;
  }

  const btn     = document.getElementById('submitBtn');
  const success = document.getElementById('submitSuccess');
  const errBox  = document.getElementById('submitError');

  // Build the data object
  const entry = {
    timestamp : new Date().toISOString(),
    pincode   : pin,
    tds       : tds,
    zone      : getZone(tds).label,
    city      : '',   // auto-filled by pincode lookup if you add that later
    state     : ''
  };

  // Always save locally as backup
  try {
    const existing = JSON.parse(localStorage.getItem('aquacheck_data')||'[]');
    existing.push(entry);
    localStorage.setItem('aquacheck_data', JSON.stringify(existing));
  } catch(e) {}

  // If no URL set yet — just show success from localStorage save
  if(!GOOGLE_SHEET_URL || GOOGLE_SHEET_URL === 'YOUR_APPS_SCRIPT_URL_HERE'){
    btn.disabled = true;
    if(errBox) errBox.style.display = 'none';
    success.classList.add('show');
    success.innerHTML = '✅ Saved locally — add your Google Sheet URL to sync online';
    setTimeout(()=>{ btn.disabled=false; success.classList.remove('show'); }, 5000);
    return;
  }

  // Send to Google Sheets
  btn.disabled = true;
  btn.innerHTML = '⏳ Sending…';
  if(errBox) errBox.style.display = 'none';

  try {
    await fetch(GOOGLE_SHEET_URL, {
      method  : 'POST',
      mode    : 'no-cors',     // Google Apps Script requires no-cors
      headers : { 'Content-Type': 'application/json' },
      body    : JSON.stringify(entry)
    });

    // no-cors means we can't read the response, but if no error was thrown it worked
    success.classList.add('show');
    success.innerHTML = '✅ Data saved to Google Sheets!';
    setTimeout(()=>{ btn.disabled=false; btn.innerHTML='📡 Share My Water Data'; success.classList.remove('show'); }, 5000);

  } catch(err) {
    btn.disabled = false;
    btn.innerHTML = '📡 Share My Water Data';
    if(errBox){
      errBox.style.display = 'block';
      errBox.innerHTML = '❌ Could not reach Google Sheets. Check your URL or internet connection.';
    }
    console.error('AquaCheck submit error:', err);
  }
}

// ── MODAL PANEL SYSTEM ──
function openPanelModal(panelId) {
  const source = document.getElementById(panelId);
  if (!source) return;
  const overlay = document.getElementById('panelModalOverlay');
  const modalBody = document.getElementById('panelModalBody');
  const modalTitle = document.getElementById('panelModalTitle');

  // Grab title from panel-header .panel-title
  const titleEl = source.querySelector('.panel-title');
  modalTitle.innerHTML = titleEl ? titleEl.innerHTML : '';

  // Grab body content
  const bodyEl = source.querySelector('.panel-body');
  modalBody.innerHTML = bodyEl ? bodyEl.innerHTML : '';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePanelModal() {
  const overlay = document.getElementById('panelModalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('panelModalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closePanelModal();
  });
  // ESC key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanelModal(); });
});

// Override togglePanel to open modal instead of inline expand
function togglePanel(id, zoneId, tds) {
  openPanelModal(id);
}

// Init
syncTDS('slider');
