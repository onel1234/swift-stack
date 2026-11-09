import type { MetadataRoute } from 'next';
import { PRIMARY_SERVICES, SITE_URL } from '@/lib/site';
import { PROJECTS } from '@/data/projects';
import { BLOG_POSTS } from '@/data/blog';

const STATIC_SITE_UPDATED_AT = new Date('2026-11-09T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: STATIC_SITE_UPDATED_AT,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...PRIMARY_SERVICES.map((svc) => ({
      url: `${SITE_URL}${svc.href}`,
      lastModified: STATIC_SITE_UPDATED_AT,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    {
      url: `${SITE_URL}/work`,
      lastModified: STATIC_SITE_UPDATED_AT,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: STATIC_SITE_UPDATED_AT,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: STATIC_SITE_UPDATED_AT,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: STATIC_SITE_UPDATED_AT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_URL}/work/${project.id}`,
    lastModified: new Date(`${project.publishedDate}T00:00:00.000Z`),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(`${post.modifiedDate}T00:00:00.000Z`),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
