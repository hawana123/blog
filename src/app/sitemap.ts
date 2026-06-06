import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/blog';

export const dynamic = 'force-static';

const BASE_URL = 'https://xp58.xyz';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'zh'];
  const staticPages = ['', '/blog', '/about', '/contact', '/privacy', '/terms', '/disclaimer'];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Static pages
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '/blog' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : page === '/blog' ? 0.9 : 0.7,
        alternates: {
          languages: {
            en: `${BASE_URL}/en${page}`,
            zh: `${BASE_URL}/zh${page}`,
          },
        },
      });
    }

    // Blog posts
    const slugs = getAllSlugs(locale);
    for (const slug of slugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}/en/blog/${slug}`,
            zh: `${BASE_URL}/zh/blog/${slug}`,
          },
        },
      });
    }
  }

  return entries;
}
