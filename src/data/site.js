// All site content. Source: the Ann Kananu Foundation programme deck (12 pages) and the foundation logo.
// Items marked "to confirm" are for the foundation office to check before the site goes public.

export const org = {
  name: 'Ann Kananu Foundation',
  tagline: 'Helping hands. Brighter futures.',
  programme: 'Nutrition & Chronic Care Foundation',
  short: 'NCCF',
  sub: 'Strengthening nutrition-centred chronic care systems in Kenya',
  country: 'Kenya',
  phone: '+254 723008165',
  email: 'yvonne.malebe@africaskoni.co.ke',
}

export const nav = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/programmes', 'Programmes'],
  ['/impact', 'Impact'],
  ['/get-involved', 'Get involved'],
  ['/contact', 'Contact'],
]

export const ticker = ['Nutrition', 'Primary healthcare', 'Chronic disease care', 'Community health workers', 'Evidence-driven', 'Kenya']

// National figures quoted in the deck.
export const context = [
  { n: 33, s: '%', label: 'of adults live with hypertension' },
  { n: 57, s: '%', label: 'of deaths are malnutrition-linked' },
  { n: 2.8, s: 'M', d: 1, label: 'Kenyans live with diabetes' },
  { n: 26, s: '%', label: 'of children under 5 are stunted' },
]

export const vision = {
  title: 'Transforming healthcare through nutrition',
  text: 'We envision a Kenya where nutrition is fully integrated into healthcare delivery as a clinical, preventive and adherence-support intervention. Through evidence-driven and system-aligned solutions, we aim to transform how chronic diseases are prevented and managed, positioning nutrition at the heart of primary healthcare rather than treating it as a welfare activity. Our vision is healthier communities through integrated care.',
}

export const challenge = [
  { tag: 'Disease burden', text: 'Kenya faces a rising epidemic of chronic diseases including diabetes, hypertension and cardiovascular conditions. Non-communicable diseases (NCDs) now account for 27% of all deaths, with prevalence increasing rapidly in urban and rural areas alike.' },
  { tag: 'Nutrition risks', text: 'Malnutrition in all its forms (undernutrition, micronutrient deficiencies and diet-related NCDs) undermines health outcomes. Poor nutrition is both a cause and a consequence of chronic disease progression.' },
  { tag: 'Fragmented care', text: 'Kenya’s healthcare system operates in silos, with nutrition, primary care and chronic disease management disconnected. This fragmentation leads to inefficient resource use and poor patient outcomes, in an already overburdened system.' },
]

export const gap = [
  { icon: 'heart', tag: 'Welfare mindset', text: 'Nutrition interventions in Kenya are predominantly viewed as welfare or feeding programmes rather than clinical interventions. This approach overlooks nutrition’s critical role in disease prevention, treatment outcomes and patient recovery. Without clinical integration, nutrition remains underutilised as a powerful healthcare tool.' },
  { icon: 'puzzle', tag: 'System disconnect', text: 'A significant disconnect exists between nutrition services and chronic disease management in Kenya’s healthcare system. Patients with diabetes, hypertension and other NCDs rarely receive integrated nutritional support, despite evidence that proper nutrition dramatically improves treatment adherence and health outcomes.' },
]

export const solution = [
  { icon: 'leaf', tag: 'Nutrition & healthcare', text: 'We position nutrition as a clinical, preventive and adherence-support intervention, not a welfare activity. Our model integrates nutrition services directly into primary healthcare systems, so patients receive comprehensive care that addresses both immediate health needs and the underlying nutritional factors affecting chronic disease outcomes.' },
  { icon: 'users', tag: 'Community-based care', text: 'Our community-based approach connects healthcare facilities with local networks, enabling early identification of at-risk individuals, continuous monitoring and sustained behaviour-change support. We deliver evidence-driven, system-aligned solutions that strengthen Kenya’s capacity to manage nutrition-related chronic diseases at scale.' },
]

export const how = [
  { icon: 'users', tag: 'Community-based care', text: 'Our trained Community Health Workers deliver nutrition screening, education and follow-up support directly in households across Kenya. This grassroots approach ensures early identification of malnutrition and chronic disease risks, enabling timely intervention where people live and work.' },
  { icon: 'clinic', tag: 'Healthcare integration', text: 'We embed nutrition services within primary healthcare facilities, working alongside clinicians to integrate nutritional assessment into routine care. This system-aligned approach makes nutrition a clinical intervention, not an afterthought, improving treatment adherence and health outcomes.' },
  { icon: 'chart', tag: 'Evidence-driven protocols', text: 'All interventions follow standardised, evidence-based protocols developed with Kenya’s health authorities. We collect real-time data to monitor outcomes, adapt strategies and demonstrate impact. This rigorous approach ensures accountability and continuous improvement in service delivery.' },
]

export const deliver = [
  { icon: 'leaf', tag: 'Clinical nutrition', text: 'Evidence-based nutrition assessments and personalised dietary interventions integrated into primary healthcare settings. We provide medical nutrition therapy for diabetes, hypertension and other diet-related chronic conditions.' },
  { icon: 'pulse', tag: 'Chronic disease support', text: 'Comprehensive chronic disease management programmes combining nutrition counselling with adherence support. Community-based care coordination ensures patients receive continuous monitoring and lifestyle-modification guidance.' },
  { icon: 'clinic', tag: 'System strengthening', text: 'Healthcare workforce training in nutrition-integrated chronic care. We build capacity within Kenya’s health system through standardised protocols, data systems and sustainable partnerships with county health departments.' },
]

// Milestones as written in the deck (to confirm: whether these are reached or targeted figures).
export const milestones = [
  { tag: 'Health outcomes', text: 'Improved nutrition status among chronic disease patients. Reduced hospital readmissions through integrated care protocols. Enhanced treatment adherence rates across partner facilities.', figure: { n: 5000, s: '', label: 'patients supported, with potential for nationwide coverage' } },
  { tag: 'Community reach', text: 'Expanded nutrition screening in primary healthcare centres. Trained community health volunteers in chronic disease nutrition support. Strengthened referral pathways between clinics and communities.', figure: { n: 10000, s: '+', label: 'beneficiaries across 3 counties' } },
]

export const results = [
  { tag: 'Reduced disease burden', big: 30, s: '%', unit: 'reduction', text: 'in nutrition-related chronic disease complications within target communities. Decreased hospital admissions for preventable conditions through early intervention and sustained nutritional support programmes.' },
  { tag: 'Improved nutrition', big: 50, s: '%', unit: 'improvement', text: 'in key nutrition indicators among enrolled patients. Enhanced dietary adherence rates and measurable gains in micronutrient status, BMI optimisation and metabolic health markers.' },
  { tag: 'Stronger health systems', big: 200, s: '+', unit: 'workers trained', text: 'healthcare workers trained in integrated nutrition and chronic care protocols. Established referral pathways and data systems connecting community health workers with primary care facilities across Kenya.' },
]

export const why = [
  { icon: 'chart', tag: 'Expertise', text: 'NCCF operates at the unique intersection of nutrition, primary healthcare and chronic disease management. Our team brings deep expertise in evidence-driven interventions, clinical nutrition protocols and health systems strengthening. We understand Kenya’s healthcare landscape and design solutions that integrate seamlessly with existing structures.' },
  { icon: 'leaf', tag: 'Approach', text: 'Unlike traditional nutrition programmes, we position nutrition as a clinical and preventive intervention, not welfare. Our system-aligned approach ensures sustainability through government partnerships, community health worker networks and data-driven decision making. We deliver measurable health outcomes, not just food distribution.' },
]

export const funding = {
  ask: '$1M',
  askLabel: 'seed funding sought for Year 1 operations',
  uses: ['Programme delivery', 'System development', 'Research, monitoring and evaluation (M&E)'],
  text: 'Revenue diversification through training fees, consulting services and social enterprise ensures long-term sustainability beyond initial grants. We remain sustainable through integration into public healthcare and insurance partnerships.',
}

export const ways = [
  { icon: 'hands', tag: 'Partner', text: 'Work with us as a county health department, hospital, insurer, research body or development partner.' },
  { icon: 'heart', tag: 'Donate', text: 'Support Year 1 operations, from community health worker training to patient follow-up.' },
  { icon: 'users', tag: 'Learn more', text: 'Ask for the full programme deck, our protocols and how we measure results.' },
]

