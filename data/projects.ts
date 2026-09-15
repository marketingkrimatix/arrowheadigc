export interface Project {
  slug: string;
  title: string;
  category: string;
  categoryKey: string;
  location: string;
  desc: string;
  stats: string;
  image: string;
  challenges: string;
  solutions: string;
  scope: string[];
  keyServices: string[];
  clientTestimonial: {
    quote: string;
    author: string;
    company: string;
  };
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: 'jack-wills-fitout',
    title: 'Jack Wills Commercial Retail Store Fit-Out',
    category: 'Office & Retail Fit-Out',
    categoryKey: 'interiors',
    location: 'Abu Dhabi Mall / Premium Retail Hub, Abu Dhabi',
    desc: 'Turnkey interior architectural fit-out for international fashion boutique Jack Wills. Scope encompassed bespoke hardwood joinery, retail display fixtures, architectural lighting, HVAC air distribution, and Civil Defense fire safety integration.',
    stats: 'Turnkey Retail Fit-Out | Bespoke Joinery | Fast-Track Delivery',
    image: '/images/jack-wills.jpeg',
    challenges: 'Executing fast-track night work within an operational shopping mall with strict mall management acoustic and logistics regulations.',
    solutions: 'Prefabricated high-precision joinery elements offsite, conducted out-of-hours MEP testing, and coordinated directly with mall technical management and Civil Defense for rapid handover.',
    scope: [
      'Complete retail store architectural demolition & fit-out',
      'Custom boutique joinery, shelving fixtures & cash counter units',
      'HVAC secondary ducting, linear diffusers & decorative lighting',
      'Civil Defense fire sprinkler repositioning & emergency exits certification',
    ],
    keyServices: ['Commercial Retail Fit-Out', 'Custom Joinery', 'MEP Distribution', 'Civil Defense Sign-Off'],
    clientTestimonial: {
      quote: 'ArrowHead delivered the Jack Wills boutique on a tight handover schedule with pristine joinery finishes and full mall management compliance.',
      author: 'Retail Project Director',
      company: 'Commercial Retail Operations'
    },
    gallery: [
      '/images/jack-wills.jpeg',
      '/images/jack-wills1.jpeg',
      '/images/wills-store.jpeg',
      '/images/wills-store1.jpeg',
      '/images/store.jpeg',
      '/images/store1.jpeg',
      '/images/store2.jpeg',
      '/images/store3.jpeg',
      '/images/mall_shop.jpeg',
      '/images/mall_shop1.jpeg',
    ]
  },
  {
    slug: 'foot-locker-fitout',
    title: 'Foot Locker Retail Flagship Store Fit-Out',
    category: 'Office & Retail Fit-Out',
    categoryKey: 'interiors',
    location: 'Abu Dhabi Retail Centers, UAE',
    desc: 'Turnkey architectural store fit-out and MEP installation for Foot Locker retail outlets, featuring commercial display casework, perimeter lighting fixtures, custom acoustic ceiling assemblies, and Civil Defense approvals.',
    stats: 'Flagship Retail Store | Commercial Fit-Out | Fast-Track Turnkey',
    image: '/images/foot_locker.jpeg',
    challenges: 'Fast-paced fit-out schedule with multi-trade coordination including joinery, power tracks, and specialized brand shopfitting.',
    solutions: 'Deployed dedicated day and night installation teams, managed prefabricated joinery staging, and completed early authority inspections.',
    scope: [
      'Commercial retail interior shopfitting & architectural lighting',
      'Custom merchandise wall display shelving & point-of-sale joinery',
      'HVAC air diffusion and electrical single line diagram compliance',
      'Civil Defense fire alarm, emergency lighting & sprinkler sign-off',
    ],
    keyServices: ['Retail Store Fit-Out', 'Commercial Joinery', 'MEP Distribution', 'Civil Defense Clearances'],
    clientTestimonial: {
      quote: 'Flawless retail fit-out execution matching our international store design standards.',
      author: 'Store Development Manager',
      company: 'Foot Locker Retail Operations'
    },
    gallery: [
      '/images/foot_locker.jpeg',
      '/images/foot_locker1.jpeg',
      '/images/foot_locker2.jpeg',
      '/images/foot_locker3.jpeg',
      '/images/foot_locker4.jpeg',
      '/images/foot_locker5.jpeg',
      '/images/foot_locker6.jpeg',
      '/images/foot_locker7.jpeg',
      '/images/foot_locker8.jpeg',
      '/images/foot_locker9.jpeg',
      '/images/foot_locker10.jpeg',
      '/images/foot_locker11.jpeg',
      '/images/foot_locker12.jpeg',
    ]
  },
  {
    slug: 'ali-makhboot-villa',
    title: 'Ali Makhboot Luxury Villa',
    category: 'Villa Construction',
    categoryKey: 'villas',
    location: 'Abu Dhabi Prestige Residential Sector, Abu Dhabi',
    desc: 'Bespoke design-build construction of a luxury contemporary private villa featuring reinforced concrete substructure, high-efficiency thermal masonry, double-height curtain wall glazing, and luxury interior stone finishes.',
    stats: '14,000 sq ft | Turnkey Design-Build | Estidama 2-Pearl',
    image: '/images/landscape.jpeg',
    challenges: 'Casting complex cantilevered architectural roof overhangs while adhering to stringent municipal structural load-bearing parameters.',
    solutions: 'Deployed engineered scaffolding shoring systems, cast high-strength C50/60 concrete mix with microsilica additives, and completed TAMM municipal inspection sign-offs seamlessly.',
    scope: [
      'Turnkey architectural engineering & TAMM permit acquisition',
      'Reinforced concrete raft foundations and structural framing',
      'Thermal insulation, roof waterproofing, and stone cladding',
      'High-end interior MEP coordination & final Certificate of Completion',
    ],
    keyServices: ['Design-Build Contracting', 'Structural Concrete', 'Thermal Envelope', 'TAMM Municipality Clearances'],
    clientTestimonial: {
      quote: 'The craftsmanship and engineering discipline shown by ArrowHead during the construction of our villa were second to none.',
      author: 'Ali Makhboot',
      company: 'Private Villa Owner'
    },
    gallery: [
      '/images/landscape.jpeg',
      '/images/landscape3.jpeg',
      '/images/villa_contemporary.png',
      '/images/villa_modern.png',
    ]
  },
  {
    slug: 'ali-hammadi-villa',
    title: 'Ali Hammadi Luxury Villa',
    category: 'Villa Construction',
    categoryKey: 'villas',
    location: 'Abu Dhabi Waterfront & Island Enclave, Abu Dhabi',
    desc: 'High-end custom villa build combining contemporary Emirati architecture with sustainable Estidama building envelopes, VRF multi-zone air conditioning, and bespoke marble flooring throughout.',
    stats: '12,800 sq ft | Design-Build | Energy-Efficient MEP',
    image: '/images/landscape3.jpeg',
    challenges: 'High water table conditions requiring continuous deep-well dewatering and tanking membrane waterproofing during basement and ground slab pours.',
    solutions: 'Engineered a specialized continuous dewatering perimeter with multi-layer self-adhesive bituminous waterproofing membranes protected by screed protection layers.',
    scope: [
      'Subsurface excavation, dewatering & structural foundation casting',
      'Superstructure reinforced concrete frame and boundary walls',
      'VRF air conditioning and smart home electrical infrastructure',
      'Landscape hardscape, boundary gate motorization & completion certifications',
    ],
    keyServices: ['Turnkey Villa Construction', 'Substructure Waterproofing', 'VRF Climate Systems', 'Luxury Marble Works'],
    clientTestimonial: {
      quote: 'ArrowHead managed every phase from excavation to final keys handover with absolute professionalism.',
      author: 'Ali Hammadi',
      company: 'Private Villa Owner'
    },
    gallery: [
      '/images/landscape3.jpeg',
      '/images/landscape.jpeg',
      '/images/villa_mediterranean.png',
      '/images/villa_resort.png',
    ]
  },
  {
    slug: 'al-nahyan-villa',
    title: 'Al Nahyan Prestige Villa',
    category: 'Villa Construction',
    categoryKey: 'villas',
    location: 'Al Nahyan Community, Abu Dhabi',
    desc: 'Exclusive private residence development featuring expansive reception majlis, modern architectural elevations, integrated boundary security walls, and luxury outdoor landscape amenities.',
    stats: '15,500 sq ft | Prestige Residence | Turnkey MEP',
    image: '/images/landscape1.jpeg',
    challenges: 'Executing heavy concrete structural work and intricate architectural landscaping within an established residential neighborhood.',
    solutions: 'Established structured delivery scheduling with municipal traffic NOCs, sound-baffled equipment, and clean site management practices.',
    scope: [
      'Full architectural and structural design submittals',
      'Reinforced concrete columns, slabs, and exterior perimeter walls',
      'Premium sanitary ware, drainage plumbing & chiller lines',
      'Complete luxury outdoor landscaping, stonework & custom joinery',
    ],
    keyServices: ['Prestige Villa Contracting', 'Structural Engineering', 'Acoustic Insulation', 'Authority NOC Submittals'],
    clientTestimonial: {
      quote: 'Exceptional structural execution and responsive project management from start to finish.',
      author: 'Al Nahyan Property Representative',
      company: 'Residential Estate'
    },
    gallery: [
      '/images/landscape1.jpeg',
      '/images/landscape2.jpeg',
      '/images/landscape4.jpeg',
      '/images/landscape5.jpeg',
      '/images/landscape6.jpeg',
      '/images/landscape7.jpeg',
      '/images/landscape8.jpeg',
      '/images/landscape9.jpeg',
    ]
  },
  {
    slug: 'katheri-family-villas',
    title: 'Katheri Family Luxury Villas Development',
    category: 'Villa Construction',
    categoryKey: 'villas',
    location: 'Abu Dhabi Prime Residential Enclave, Abu Dhabi',
    desc: 'Master residential development project for the Katheri Family. Features reinforced concrete foundations, double-height panoramic glass elevations, private majlis pavilions, smart home automation, and landscaped grounds.',
    stats: 'Luxury Villa Compound | Turnkey Master Build | High-End Finishing',
    image: '/images/Matrix_project.jpeg',
    challenges: 'Synchronizing multi-unit structural casting schedules while optimizing shared utility connections and municipal infrastructure lines.',
    solutions: 'Utilized phased structural modeling to sequence excavation, substructure casting, and centralized MEP utility distribution for seamless parallel construction.',
    scope: [
      'Master planning, architectural design & municipal approvals',
      'Concurrent excavation, shoring, and raft foundation casting',
      'Superstructure concrete framework, blockwork, and roofing waterproofing',
      'High-end interior fit-out, MEP infrastructure & landscaped hardscapes',
    ],
    keyServices: ['Multi-Villa Compound Construction', 'BIM Coordination', 'Infrastructure Utilities', 'Turnkey Luxury Finishes'],
    clientTestimonial: {
      quote: 'ArrowHead has demonstrated superior engineering capability on our family villa project. Their precision planning and on-site speed are remarkable.',
      author: 'Katheri Family Representative',
      company: 'Private Residence'
    },
    gallery: [
      '/images/Matrix_project.jpeg',
      '/images/Matrix_project1.jpeg',
      '/images/Matrix_project2.jpeg',
      '/images/Matrix_project3.jpeg',
    ]
  },
  {
    slug: 'khulagi-villa',
    title: 'Khulagi Custom Residential Villa',
    category: 'Villa Construction',
    categoryKey: 'villas',
    location: 'Abu Dhabi Elite Suburb, Abu Dhabi',
    desc: 'Design-build custom luxury villa construction featuring private courtyards, modern insulated concrete formwork, bespoke decorative ceiling details, and energy-efficient climate control.',
    stats: '11,000 sq ft | Design-Build | Custom Majlis',
    image: '/images/KhulagiVilla.png',
    challenges: 'Complex ceiling MEP coordination to accommodate concealed ducted AC units and ambient architectural cove lighting.',
    solutions: 'Engineered specialized ceiling framing plans, pre-installed insulated flexible acoustic ducting, and validated air balance readings.',
    scope: [
      'Architectural planning and structural engineering sign-off',
      'Concrete substructure, superstructure, and masonry blockwork',
      'High-performance VRF HVAC, electrical switchboards, and plumbing',
      'Exterior boundary walls, vehicular gates, and interlock paving',
    ],
    keyServices: ['Custom Villa Construction', 'Interior Architectural Detailing', 'MEP Integration', 'Authority Approvals'],
    clientTestimonial: {
      quote: 'A wonderful experience working with the ArrowHead team. They took care of every detail from foundation to final paintwork.',
      author: 'Khulagi Family',
      company: 'Private Homeowner'
    },
    gallery: [
      '/images/KhulagiVilla.png',
      '/images/villa_smart.png',
      '/images/villa_modern.png',
    ]
  },
  {
    slug: 'sanjay-jain-villa',
    title: 'Sanjay Jain Luxury Custom Villa',
    category: 'Villa Construction',
    categoryKey: 'villas',
    location: 'Saadiyat & Prime Abu Dhabi Enclave, Abu Dhabi',
    desc: 'Turnkey architectural design-build contracting of an expansive private luxury residence for Sanjay Jain. Features reinforced C50/60 concrete foundation raft, 2-Pearl Estidama thermal envelope, Italian marble floorings, double-height curtain glass, and premium hardscaped gardens.',
    stats: '14,500 sq ft | Design-Build Turnkey | 2-Pearl Estidama',
    image: '/images/ArrowheadVilla.png',
    challenges: 'Achieving structural cantilever spans and high acoustic isolation while complying strictly with Estidama Pearl thermal rating standards.',
    solutions: 'Integrated high-performance thermal insulation boards, double-glazed low-E curtain glazing with thermal breaks, and continuous municipal TAMM structural inspections.',
    scope: [
      'Comprehensive architectural design, structural engineering & TAMM permit clearances',
      'C50/60 concrete foundation raft, reinforced columns, and slab pours',
      'Estidama 2-Pearl rated thermal envelope, waterproofing & facade marble dry-cladding',
      'Turnkey luxury interior fit-out, VRF multi-zone HVAC, and smart home automation',
    ],
    keyServices: ['Turnkey Luxury Villa Construction', 'Estidama Green Compliance', 'High-End Marble Cladding', 'VRF Climate Systems'],
    clientTestimonial: {
      quote: 'ArrowHead executed the entire villa with exceptional precision and attention to every luxury detail. Their team handled engineering, approvals, and finishes seamlessly.',
      author: 'Sanjay Jain',
      company: 'Private Villa Owner'
    },
    gallery: [
      '/images/ArrowheadVilla.png',
      '/images/villa_modern.png',
      '/images/villa_contemporary.png',
      '/images/villa_mediterranean.png',
    ]
  },
  {
    slug: 'mussafah-warehouse-civils',
    title: 'Mussafah Industrial Logistics Warehouse Construction',
    category: 'Industrial Warehouses',
    categoryKey: 'warehouses',
    location: 'Mussafah Industrial Zone M9, Abu Dhabi',
    desc: 'Turnkey engineering and construction of an industrial logistics warehouse facility, featuring pre-engineered structural steel portal frames, high-flatness TR34 reinforced concrete floor slabs, overhead crane gantry beams, and fire protection sprinkler networks.',
    stats: '35,000 sqm Facility | TR34 Free-Movement Floor | 10-Ton Crane Gantry',
    image: '/images/civil-infrastructure.webp',
    challenges: 'Achieving superflat floor tolerances required for narrow-aisle high-reach forklifts while maintaining high pour productivity.',
    solutions: 'Utilized laser screed concrete placement technology, high-dosage synthetic fiber reinforcement, and dry-shake quartz surface hardeners.',
    scope: [
      'Substructure heavy pile caps, grade beams, and TR34 slab casting',
      'Structural steel portal frame fabrication, corrosion protection & erection',
      'Insulated sandwich roof and wall cladding installation',
      'Civil Defense approved wet sprinkler riser systems and high-bay LED lighting',
    ],
    keyServices: ['Industrial Warehouse Construction', 'Structural Steel Portal Framing', 'TR34 High-Flatness Flooring', 'Civil Defense Fire Systems'],
    clientTestimonial: {
      quote: 'The warehouse facility was delivered with immaculate concrete slab flatness and robust structural steel assembly.',
      author: 'Operations Director',
      company: 'Logistics Distribution Hub'
    },
    gallery: [
      '/images/civil-infrastructure.webp',
      '/images/store.jpeg',
      '/images/facility.png',
    ]
  },
  {
    slug: 'yas-island-sewerage',
    title: 'Yas Island Trunk Sewerage Network',
    category: 'HDPE Pipelines',
    categoryKey: 'pipelines',
    location: 'Yas Island, Abu Dhabi',
    desc: 'Supply and installation of 4.8km of PE100 HDPE trunk sewerage lines (1200mm diameter), including hydrostatic testing and municipal utility certifications.',
    stats: '4.8km Length | DN 1200mm | Municipal Approved',
    image: '/images/123.jpeg',
    challenges: 'Working under tidal water conditions where dewatering required continuous operation, and securing municipal utility approvals under tight infrastructure handover deadlines.',
    solutions: 'We deployed advanced shoring configurations, utilized PE100-RC crack-resistant pipe sheets, and operated calibrated butt-fusion welding rigs to record all joint parameters.',
    scope: [
      'DN 1200mm HDPE pipe supply and excavation works',
      'Trench safety shoring & deep-well dewatering lines',
      'Hydrostatic test loops validation at 10 Bar pressure',
      'Final municipal inspector witness and utility tie-in clearance',
    ],
    keyServices: ['HDPE Pipe Fusion', 'Dewatering Setup', 'Micro-tunneling Approval', 'Pressure Network Testing'],
    clientTestimonial: {
      quote: 'ArrowHead executed the HDPE pipeline scopes with high compliance. Their computerized weld logs and dewatering management were exemplary.',
      author: 'Eng. Salem Al Hosani',
      company: 'Infrastructure Project Consultant'
    },
    gallery: [
      '/images/123.jpeg',
      '/images/456.jpeg',
      '/images/789.jpeg',
      '/images/hdpe.jpg',
    ]
  },
  {
    slug: 'mussafah-fm',
    title: 'Mussafah Industrial Factory Hard FM AMC',
    category: 'Facility Management',
    categoryKey: 'fm',
    location: 'Mussafah Industrial M9, Abu Dhabi',
    desc: 'Annual maintenance contract (AMC) for integrated hard services. Maintaining HVAC chiller plants, electrical switchgear distributions, pumps, and fire protection systems.',
    stats: '15,000 sqm Managed | 24/7 Support | Hard FM',
    image: '/images/facility.png',
    challenges: 'Minimizing maintenance shutdowns in a continuous manufacturing workshop operating 24 hours.',
    solutions: 'Scheduled preventative checks (thermal scans, filter washes, switchgear balancing) during off-peak night shifts and guaranteed a 2-hour emergency technician dispatch SLA.',
    scope: [
      'Scheduled AC/chiller preventative coil washes & services',
      'Electrical Distribution Board (DB) infrared scans',
      'Fire sprinklers & alarms annual compliance checkups',
      '24/7 reactive emergency repair support team',
    ],
    keyServices: ['Chiller Maintenance', 'DB Board Thermography', 'Preventative AMC Model', 'Safety Compliance Audit'],
    clientTestimonial: {
      quote: 'Our plant has operated with zero downtime since signing the AMC with ArrowHead. Their responsive troubleshooting team is excellent.',
      author: 'Industrial Plant Operations',
      company: 'Mussafah Manufacturing Facility'
    },
    gallery: [
      '/images/facility.png',
      '/images/mep-work.png',
      '/images/interior.jpeg',
    ]
  }
];
