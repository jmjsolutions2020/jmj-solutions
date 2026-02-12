import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jmj-solutions.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [''];

  return staticPages.map((page) => {
    const url = page ? `${siteUrl}/${page}` : `${siteUrl}/`;
    return {
      url,
      lastModified: new Date().toISOString(),
    };
  });
}
