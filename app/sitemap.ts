import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arrowheadigc.com';

  const basePages = [
    '',
    '/about',
    '/contact',
    '/insights',
    '/projects',
    '/sectors',
    '/services',
  ];

  const services = [
    '/services/hdpe-pipelines',
    '/services/villa-construction',
    '/services/villa-renovation',
    '/services/facility-management',
    '/services/mep-specialized',
    '/services/marine-industrial',
    '/services/wet-utilities-infrastructure',
    '/services/infrastructure-civil-works',
  ];

  const sectors = [
    '/sectors/commercial-retail',
    '/sectors/industrial-manufacturing',
    '/sectors/marine-ports',
    '/sectors/residential-villas',
    '/sectors/infrastructure-utilities',
    '/sectors/hospitality-leisure',
  ];

  const locations = [
    '/locations/yas-island',
    '/locations/saadiyat-island',
    '/locations/khalifa-city',
    '/locations/mussafah',
    '/locations/al-raha',
  ];

  const insights = [
    '/insights/guide-to-tamm-villa-approvals',
    '/insights/hdpe-butt-fusion-welding-parameters',
    '/insights/understanding-estidama-pearl-ratings',
  ];

  const projects = [
    '/projects/yas-island-sewerage',
    '/projects/al-raha-villa',
    '/projects/mussafah-fm',
    '/projects/khalifa-extension',
    '/projects/corporate-mep',
    '/projects/mussafah-marine',
  ];

  const allPaths = [
    ...basePages,
    ...services,
    ...sectors,
    ...locations,
    ...insights,
    ...projects,
  ];

  return allPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : path.includes('/locations/') || path.includes('/services/') ? 0.9 : 0.7,
  }));
}
