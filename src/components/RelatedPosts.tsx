import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { getTranslations } from 'next-intl/server';

interface RelatedPostsProps {
  locale: string;
  currentSlug: string;
  category: string;
  tags: string[];
}

export default async function RelatedPosts({
  locale,
  currentSlug,
  category,
  tags,
}: RelatedPostsProps) {
  const t = await getTranslations('relatedPosts');
  const allPosts = getAllPosts(locale);

  // Score posts by relevance
  const scored = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      if (post.category === category) score += 3;
      const commonTags = post.tags.filter((tag) => tags.includes(tag));
      score += commonTags.length;
      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (scored.length === 0) return null;

  return (
    <aside className="mt-10 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{t('title')}</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {scored.map(({ post }) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <span className="text-xs font-medium text-blue-600 mb-1 block">
              {post.category}
            </span>
            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-2 leading-snug">
              {post.title}
            </h4>
            <p className="text-xs text-gray-500 mt-2 line-clamp-2">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
