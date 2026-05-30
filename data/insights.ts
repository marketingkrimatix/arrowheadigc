export interface InsightArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  metaDesc: string;
  keywords: string[];
  content: {
    sectionTitle: string;
    paragraphs: string[];
  }[];
  faqs: { q: string; a: string }[];
}

export const insightArticles: InsightArticle[] = [
  {
    slug: 'guide-to-tamm-villa-approvals',
    title: 'Complete Guide to Abu Dhabi TAMM Villa Building Permits',
    category: 'Municipal Permits',
    date: 'May 12, 2026',
    readTime: '6 min read',
    summary: 'Navigating the TAMM portal for structural extensions, Majlis blocks, and custom luxury villa permits under Abu Dhabi Municipality regulations.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    metaDesc: 'How to secure a building permit in Abu Dhabi via the TAMM portal. Learn about structural drawings, utility NOCs, and municipal inspection checks.',
    keywords: ['TAMM building permit Abu Dhabi', 'municipal permit Khalifa City', 'villa approvals Abu Dhabi', 'structural extensions approvals', 'Abu Dhabi DED License'],
    content: [
      {
        sectionTitle: 'Understanding the Abu Dhabi TAMM Approval Process',
        paragraphs: [
          'Securing a building permit for a custom villa, majlis extension, or structural renovation in Abu Dhabi is managed through the Unified Government Services Portal (TAMM). Planning ahead and coordinating all civil, MEP, and structural layers is key to avoiding structural inspection delays.',
          'Before submitting a building permit request, a registered general contracting company (holding an active DED license, such as ArrowHead License CN-4998977) must prepare the complete design coordinates. This includes obtaining the initial site plan (Krooki) from the Abu Dhabi Municipality (ADM) showing plot boundaries and surrounding corridors.'
        ]
      },
      {
        sectionTitle: 'Preparing Drawing Files & Securing Utility NOCs',
        paragraphs: [
          'The first phase of approval requires uploading structural drawings, architectural layouts, and MEP ducting schematics. Drawings must be prepared in CAD formats, detailing load capacity calculations, column schedules, and pile layouts.',
          'Next, the contractor must apply for No Objection Certificates (NOCs) from relevant government utility providers. For water and sewage networks, NOCs are coordinated with the Abu Dhabi Distribution Company (ADDC) and the Abu Dhabi Sewerage Services Company (ADSSC). If the plot bounds public highways, a road traffic clearance from the Integrated Transport Centre (ITC) is also mandatory.'
        ]
      },
      {
        sectionTitle: 'Municipal Inspections & Handover Certification',
        paragraphs: [
          'Once the NOCs are compiled, the file is submitted for ADM structural permit approval. During construction, the municipality issues inspection calls at critical phases: foundation steel checks before concrete casting, structural column inspection, and final envelope testing.',
          'Upon successful completion of all site scopes, the general contractor submits core hydrostatic test logbooks, Civil Defense compliance clearances, and structural stability certificates to secure the official Municipal Certificate of Occupancy, allowing utility connections.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Do I need a building permit for a detached Majlis block in Khalifa City?',
        a: 'Yes. Any structural addition or majlis block that increases the built-up area of a residential plot requires structural calculations and municipal approvals. Doing works without a permit can trigger municipal violations and delay utility handovers.'
      },
      {
        q: 'How long does the TAMM permit approval process take?',
        a: 'If all engineering drawings are aligned with local building codes and utility NOCs are compiled, the municipal review typically takes between 7 to 15 working days.'
      }
    ]
  },
  {
    slug: 'hdpe-butt-fusion-welding-parameters',
    title: 'Technical Guide: HDPE Butt-Fusion Welding Parameters per DVS 2207',
    category: 'Utility Infrastructure',
    date: 'April 28, 2026',
    readTime: '8 min read',
    summary: 'A technical reference for PE100 pipeline joint fusion pressure logs, heating temperature adjustments, and cooling times for utility pipeline contractors.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    metaDesc: 'Standard butt-fusion welding parameters for HDPE pipes per DVS 2207. Learn about heating temperatures, cooling times, and joint log requirements.',
    keywords: ['HDPE butt-fusion parameters', 'DVS 2207 welding standard', 'PE100 pipeline fusion joint', 'pipe welding logs Abu Dhabi', 'ADSSC pipeline contractors'],
    content: [
      {
        sectionTitle: 'Critical Parameters for HDPE Butt-Fusion Welding',
        paragraphs: [
          'High-Density Polyethylene (HDPE) PE100 pipelines are preferred for pressure water and sewerage mains due to their chemical inertness and joint flexibility. However, joint integrity depends strictly on executing butt-fusion welding according to rigorous international standards, primarily the DVS 2207 Part 1 guideline.',
          'Butt-fusion involves trimming pipe ends, heating them with a calibrated heater plate, and pressing them together under controlled hydraulic pressure. The process consists of five distinct phases: bead-up, heat soak, changeover, joining pressure build-up, and fusion cooling.'
        ]
      },
      {
        sectionTitle: 'Calculating Heater Plate Temperatures & Joint Pressures',
        paragraphs: [
          'For standard PE100 raw materials, the heater plate temperature must be calibrated between 200°C and 220°C. In the UAE summer, temperature adjustments must account for ambient heat. All welding should occur inside protective tents to prevent wind and dust from settling on heated pipe ends.',
          'Joining pressure is calculated based on the pipe diameter and SDR wall thickness. The bead-up phase pushes the pipe ends against the heater plate at a specified pressure (typically 0.15 N/mm²) until a uniform molten bead forms around the circumference. Pressure is then reduced to near zero for the soak duration, allowing heat to penetrate the pipe walls.'
        ]
      },
      {
        sectionTitle: 'Changeover & Controlled Cooling Phases',
        paragraphs: [
          'The changeover phase—the time taken to retract the heater plate and bring the molten ends together—must be minimized (under 5 seconds for DN 400mm pipes) to prevent premature surface solidification.',
          'Once the pipe ends meet, pressure is gradually increased to the fusion join pressure (0.15 N/mm²) and held constant throughout the cooling duration. Cooling under pressure is critical; premature release or artificial cooling (like splashing water) will degrade joint strength. All parameter logs must be recorded by computerized data loggers for handover.'
        ]
      }
    ],
    faqs: [
      {
        q: 'What is the minimum cooling duration for a DN 1200mm HDPE pipe?',
        a: 'For large-diameter pipes like DN 1200mm with thick SDR-11 walls, the cooling duration under joining pressure exceeds 60 minutes, per DVS 2207 Part 1 guidelines.'
      },
      {
        q: 'Why is sand contamination critical during HDPE pipeline welding?',
        a: 'Tiny sand particles trapped in the molten polyethylene prevent molecular chain entanglement, creating void spaces that lead to joint failure under hydrostatic testing loads.'
      }
    ]
  },
  {
    slug: 'understanding-estidama-pearl-ratings',
    title: 'Understanding Estidama Pearl Ratings for Residential Villas',
    category: 'Green Buildings',
    date: 'March 15, 2026',
    readTime: '5 min read',
    summary: 'An overview of Abu Dhabi Estidama Pearl rating guidelines, thermal insulation envelope checks, and water flow balancing for private villa contracting.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    metaDesc: 'Estidama Pearl rating system explained for Abu Dhabi villas. Learn about thermal building envelopes, water efficiency, and municipal NOC steps.',
    keywords: ['Estidama Pearl ratings Abu Dhabi', 'green villa building codes', 'thermal insulation envelope check', 'Abu Dhabi energy conservation codes', 'Abu Dhabi DED License'],
    content: [
      {
        sectionTitle: 'What is the Abu Dhabi Estidama Pearl Rating System?',
        paragraphs: [
          'Estidama (the Arabic word for sustainability) is a building design methodology initiated by the Abu Dhabi Urban Planning Council. The Pearl Rating System (PRS) evaluates the sustainability of villa designs, commercial structures, and communities, encouraging water conservation, energy efficiency, and material recycling.',
          'For all new private villa constructions in Abu Dhabi, securing at least a 1-Pearl Estidama rating is mandatory to receive structural permit clearances from the Abu Dhabi Municipality. Luxury custom estates on Saadiyat Island or Al Raha Beach often target 2-Pearl or 3-Pearl ratings.'
        ]
      },
      {
        sectionTitle: 'Optimizing the Thermal Building Envelope',
        paragraphs: [
          'The building envelope (walls, roof, glazing) is the primary focus of energy conservation. High-performance insulation panels (such as extruded polystyrene sheets) must be layered inside external walls and roof assemblies to minimize summer heat transfer.',
          'Glazing specifications are also critical. Villas must utilize double-glazed window configurations with low-emissivity (Low-E) coatings and aluminum frames containing thermal breaks. This reduces the heat load on HVAC cooling systems, dropping overall energy draw.'
        ]
      },
      {
        sectionTitle: 'Water Conservation & Material Stewardship',
        paragraphs: [
          'Water efficiency requires installing conservation aerator valves on faucets, low-flow toilets, and high-efficiency smart irrigation systems for villa landscaping, reducing municipal consumption.',
          'Material selection requires procuring aggregate concrete and steel from local, certified manufacturers, limiting transport emissions. ArrowHead coordinates the complete Estidama validation checks, compiling material supply logs to secure final approvals.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is a 1-Pearl Estidama rating mandatory for all Abu Dhabi villas?',
        a: 'Yes. The Abu Dhabi Municipality requires all new private residential villas to secure at least a 1-Pearl rating to get a building permit and final occupancy certification.'
      },
      {
        q: 'Does an Estidama design increase villa construction costs?',
        a: 'While high-efficiency HVAC units and double-glazing window fittings require upfront capital, they reduce monthly energy and water bills by up to 35%, yielding long-term savings.'
      }
    ]
  }
];
