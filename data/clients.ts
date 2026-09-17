export interface ClientPartner {
  name: string;
  category: 'Main Contractor & Fit-Out' | 'Engineering & Architecture Consultancy';
  logo?: string;
  description: string;
  scope: string;
}

export const clientPartners: ClientPartner[] = [
  {
    name: 'ALEC Engineering and Contracting',
    category: 'Main Contractor & Fit-Out',
    logo: '/client-logos/alec-holdings.jpeg',
    description: 'Premier tier-1 main contracting group operating across major landmark developments in the UAE and Gulf region.',
    scope: 'Specialized Subcontracting, MEP Integration, Civil Foundations'
  },
  {
    name: 'Bond Interiors',
    category: 'Main Contractor & Fit-Out',
    logo: '/client-logos/z-bond.jpeg',
    description: 'Leading high-end interior fit-out contractor specializing in luxury hospitality, retail flagship stores, and corporate offices.',
    scope: 'Commercial Shop Fit-Outs, Joinery Installation, Civil Defense Compliance'
  },
  {
    name: 'BW Interiors',
    category: 'Main Contractor & Fit-Out',
    logo: '/client-logos/bw-interiors.jpeg',
    description: 'Acclaimed fit-out and architectural refurbishment contractor known for prestigious corporate offices and bespoke commercial interiors.',
    scope: 'Turnkey Office Fit-Out, Architectural Partitions, MEP Distribution'
  },
  {
    name: 'Ghuzlan Emirates Furn & Decor',
    category: 'Main Contractor & Fit-Out',
    logo: '/client-logos/ghuzlan.jpeg',
    description: 'Established UAE interior fit-out, bespoke furniture, and decorative contracting enterprise with extensive prestige residential and commercial portfolios.',
    scope: 'Damac Lagoons Venice Cluster Fit-Out, Custom Joinery, Decorative Ceilings'
  },
  {
    name: 'RAK Ceramics',
    category: 'Main Contractor & Fit-Out',
    logo: '/client-logos/rak-ceramics.jpeg',
    description: 'Global ceramic and lifestyle solutions leader partnering on flagship retail showroom fit-outs, display architecture, and premium interior commercial spaces.',
    scope: 'Retail Flagship Fit-Out, Architectural Display Joinery, Lighting & MEP Coordination'
  },
  {
    name: 'Matrix Engineering Consultants',
    category: 'Engineering & Architecture Consultancy',
    logo: '/client-logos/matrix.jpeg',
    description: 'Leading multi-disciplinary engineering consultancy delivering architectural design, structural engineering, and authority approvals.',
    scope: 'Structural Design Coordination, Municipal NOCs, Site Supervision'
  },
  {
    name: 'Manisa Studio Engineering Consultancy',
    category: 'Engineering & Architecture Consultancy',
    logo: '/client-logos/manisa.jpeg',
    description: 'Innovative architectural design and structural engineering studio specializing in contemporary residential villas and commercial complexes.',
    scope: 'Villa Architecture, Structural Modeling, TAMM Permit Processing'
  },
  {
    name: 'Al Masakn Engineering Consultants',
    category: 'Engineering & Architecture Consultancy',
    logo: '/client-logos/almaskan.jpeg',
    description: 'Reputable UAE engineering consultancy firm providing comprehensive civil engineering, villa design, and project management.',
    scope: 'Design-Build Engineering, Estidama Pearl Consulting, Authority Approvals'
  },
  {
    name: 'Arcal Engineering Consultants',
    category: 'Engineering & Architecture Consultancy',
    logo: undefined,
    description: 'Experienced engineering and architectural consultancy group providing full-scope planning, structural reviews, and building inspection.',
    scope: 'Engineering Oversight, Structural Reviews, Municipal Compliance'
  }
];
