import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arrowheadigc.com';

  const basePages = [
    '',
    '/about',
    '/clients',
    '/contact',
    '/insights',
    '/projects',
    '/sectors',
    '/services',
  ];

  const services = [
    '/services/office-interiors',
    '/services/industrial-warehouses',
    '/services/hdpe-pipelines',
    '/services/villa-construction',
    '/services/villa-renovation',
    '/services/facility-management',
    '/services/mep-specialized',
    '/services/wet-utilities-infrastructure',
    '/services/infrastructure-civil-works',
  ];

  const sectors = [
    '/sectors/commercial-retail',
    '/sectors/residential-villas',
    '/sectors/infrastructure-utilities',
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

  const projectPaths = [
    '/projects/ghuzlan-commercial-fitout',
    '/projects/rak-ceramics-showroom',
    '/projects/jack-wills-fitout',
    '/projects/foot-locker-fitout',
    '/projects/ali-makhboot-villa',
    '/projects/ali-hammadi-villa',
    '/projects/al-nahyan-villa',
    '/projects/katheri-family-villas',
    '/projects/khulagi-villa',
    '/projects/sanjay-jain-villa',
    '/projects/yas-island-sewerage',
    '/projects/mussafah-fm',
  ];

  const allPaths = [
    ...basePages,
    ...services,
    ...sectors,
    ...locations,
    ...insights,
    ...projectPaths,
  ];

  return allPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : path.includes('/locations/') || path.includes('/services/') ? 0.9 : 0.7,
  }));
}
