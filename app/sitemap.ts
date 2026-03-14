import { MetadataRoute } from 'next';
import { areas, brands } from '@/lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aircon-engineering.com';

  // Static Routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Dynamic Area Pages
  const areaRoutes = areas.map((area) => ({
    url: `${baseUrl}/ac-service-in-${area}-gurgaon`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic Brand Pages
  const brandRoutes = brands.map((brand) => ({
    url: `${baseUrl}/${brand}-ac-service-gurgaon`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...areaRoutes, ...brandRoutes];
}
