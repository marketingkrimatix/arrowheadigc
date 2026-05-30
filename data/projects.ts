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
    slug: 'yas-island-sewerage',
    title: 'Yas Island Trunk Sewerage Network',
    category: 'HDPE Pipelines',
    categoryKey: 'pipelines',
    location: 'Yas Island, Abu Dhabi',
    desc: 'Supply and installation of 4.8km of PE100 HDPE trunk sewerage lines (1200mm diameter), including hydrostatic testing and ADSSC certifications.',
    stats: '4.8km Length | DN 1200mm | ADSSC Approved',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    challenges: 'Working under tidal water conditions where dewatering required continuous operation, and securing ADSSC approvals under tight infrastructure handover deadlines.',
    solutions: 'We deployed advanced shoring configurations, utilized PE100-RC crack-resistant pipe sheets, and operated calibrated butt-fusion welding rigs to record all joint parameters.',
    scope: [
      'DN 1200mm HDPE pipe supply and excavation works',
      'Trench safety shoring & deep-well dewatering lines',
      'Hydrostatic test loops validation at 10 Bar pressure',
      'Final ADSSC inspector witness and municipal tie-in clearance',
    ],
    keyServices: ['HDPE Pipe Fusion', 'Dewatering Setup', 'Micro-tunneling Approval', 'Pressure Network Testing'],
    clientTestimonial: {
      quote: 'ArrowHead executed the HDPE pipeline scopes with high compliance. Their computerized weld logs and dewatering management were exemplary.',
      author: 'Eng. Salem Al Hosani',
      company: 'ADSSC Operations Inspector'
    },
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=400&q=80',
    ]
  },
  {
    slug: 'al-raha-villa',
    title: 'Al Raha Gardens Premium Turnkey Villa',
    category: 'Villa Construction',
    categoryKey: 'villas',
    location: 'Al Raha, Abu Dhabi',
    desc: 'Complete design-build of a contemporary luxury 6-bedroom villa. Featuring double-height glazing, custom joinery, smart lighting, and an Estidama 2-Pearl rating.',
    stats: '12,500 sq ft | Design-Build | 2-Pearl Estidama',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    challenges: 'Integrating complex VRF multi-zone AC ducting grids within modern minimalist concrete slab elevations without compromising headroom.',
    solutions: 'Coordinated structural design using Revit BIM software to pre-route all MEP stacks and secured approvals from the Abu Dhabi Municipality.',
    scope: [
      'Turnkey architectural design & TAMM building permit',
      'Casting high-strength reinforced concrete slabs & foundations',
      'Premium interior fit-outs (Italian marble & gypsum ceilings)',
      'Securing the final Certificate of Occupancy',
    ],
    keyServices: ['Residential Architecture', 'Estidama Consulting', 'Structural Casting', 'High-End Marble Joinery'],
    clientTestimonial: {
      quote: 'Building our custom villa with ArrowHead was a smooth experience. Their attention to structural finishing and municipal approvals was exceptional.',
      author: 'Mohammed Al Mazrouei',
      company: 'Private Villa Owner'
    },
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
    ]
  },
  {
    slug: 'mussafah-fm',
    title: 'Mussafah Industrial Factory Hard FM',
    category: 'Facility Management',
    categoryKey: 'fm',
    location: 'Mussafah Industrial M9, Abu Dhabi',
    desc: 'Annual maintenance contract (AMC) for integrated hard services. Maintaining HVAC chiller plants, electrical switchgear distributions, pumps, and fire protection systems.',
    stats: '15,000 sqm Managed | 24/7 Support | Hard FM',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
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
      author: 'Rajesh Kumar',
      company: 'General Manager, Al Jaber Steel'
    },
    gallery: [
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
    ]
  },
  {
    slug: 'khalifa-extension',
    title: 'Khalifa City Villa Structural Extension',
    category: 'Villa Renovation',
    categoryKey: 'villas',
    location: 'Khalifa City A, Abu Dhabi',
    desc: 'Structural design and casting of a secondary double-story majlis extension, structural wall modifications, boundary wall renovations, and municipal permit processing.',
    stats: '2,800 sq ft Extension | TAMM Approved',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    challenges: 'Safely linking the secondary concrete structure to the old villa load columns without risking cracking or differential settlement.',
    solutions: 'We cast separate columns on foundation piles and laid expansion joint profiles between structures, securing structural NOCs from the municipality.',
    scope: [
      'Structural load assessment & foundation piling design',
      'Concrete majlis brickwork & boundary extensions',
      'Damp waterproofing membrane applications',
      'ADM permit submissions via TAMM portal',
    ],
    keyServices: ['Structural Extension', 'TAMM Portal Approvals', 'Waterproofing Membrane', 'Majlis Block Casting'],
    clientTestimonial: {
      quote: 'ArrowHead designed and constructed our Majlis extension. They managed all municipality paperwork and structural checks perfectly.',
      author: 'Fatima Al Mansouri',
      company: 'Resident, Khalifa City'
    },
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
    ]
  },
  {
    slug: 'corporate-mep',
    title: 'Corporate Office Fit-Out & MEP',
    category: 'MEP Specialized',
    categoryKey: 'mep',
    location: 'Capital Tower, Abu Dhabi',
    desc: 'Mechanical, electrical, plumbing, and Civil Defense sprinkler system remodeling for a luxury multi-floor tenant headquarters.',
    stats: '3 Floors | HVAC Balancing | Civil Defense Approved',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    challenges: 'Modifying the core sprinkler lines and AC diffusers under live office building rules without triggering fire alarms.',
    solutions: 'Conducted night-shift hot taps, tested water pressures systematically, and coordinated witness tests with the Civil Defense inspector.',
    scope: [
      'Tenant fit-out plumbing & drainage modifications',
      'HVAC air balance diffusers & GI ducts adjustment',
      'Dressing sub-DB panels & circuit wire terminations',
      'Securing Civil Defense completion certificate',
    ],
    keyServices: ['Commercial Fitting', 'HVAC Balancing', 'Sprinkler Setup', 'ADCD Safety Compliance'],
    clientTestimonial: {
      quote: 'The team completed the MEP fit-out ahead of schedule. Their coordination with Capital Tower management and Civil Defense was seamless.',
      author: 'Christian Wagner',
      company: 'Facilities Manager, Capital Corp'
    },
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
    ]
  },
  {
    slug: 'mussafah-marine',
    title: 'Mussafah Marine Slipway Reconstruction',
    category: 'Marine & Industrial',
    categoryKey: 'marine',
    location: 'Mussafah Port Channel, Abu Dhabi',
    desc: 'Reinforced concrete slipway restoration under tidal constraints. Repairs of concrete erosion, rebar replacement, and anti-corrosive marine epoxy coatings.',
    stats: 'Boat Slipway | Microsilica Concrete | Marine Grade',
    image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80',
    challenges: 'Washing away of fresh concrete due to tidal movements during structural slipway casting.',
    solutions: 'Utilized rapid-setting C50/60 marine concrete containing microsilica and scheduled all casting operations strictly within a narrow 4-hour low-tide window.',
    scope: [
      'Sandblasting rusted structural steel rebars',
      'Casting marine concrete block foundations',
      'Applying thick anti-corrosive epoxy seal coats',
      'Port safety coordinates clearance certificates',
    ],
    keyServices: ['Marine Slipway Concrete', 'Microsilica Castings', 'Cathodic Protection', 'Anti-Corrosive Painting'],
    clientTestimonial: {
      quote: 'ArrowHead restored our boat slipway under severe tidal conditions. Their timing, safety logs, and concrete quality were outstanding.',
      author: 'Captain Hamad Al Dhaheri',
      company: 'Marine Services Division'
    },
    gallery: [
      'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
    ]
  }
];
