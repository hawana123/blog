import { compileMDX } from 'next-mdx-remote/rsc';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { routing } from '@/i18n/routing';
import AdSlot from '@/components/AdSlot';

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    const slugs = getAllSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations('blog');
  const post = getPostBySlug(slug, locale);

  if (!post) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {locale === 'en' ? 'Article Not Found' : '文章未找到'}
        </h1>
        <Link href={`/${locale}/blog`} className="text-blue-600 hover:underline">
          ← {t('backToBlog')}
        </Link>
      </div>
    );
  }

  const { content: mdxContent } = await compileMDX<{ children: React.ReactNode }>({
    source: post.content,
    components: {},
  });

  return (
    <article className="container-custom py-12">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-500">
        <Link href={`/${locale}`} className="hover:text-blue-600">
          {locale === 'en' ? 'Home' : '首页'}
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/${locale}/blog`} className="hover:text-blue-600">
          {t('title')}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{post.title}</span>
      </div>

      {/* Header */}
      <header className="mb-8 max-w-3xl">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{post.author}</span>
          <span>·</span>
          <time>{post.date}</time>
          <span>·</span>
          <span>{post.readingTime} {locale === 'en' ? 'min read' : '分钟阅读'}</span>
        </div>
      </header>

      {/* Ad Slot - Top */}
      <AdSlot size="banner" className="mb-8" />

      {/* MDX Content */}
      <div className="prose">{mdxContent}</div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">{t('categories')}</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Ad Slot - Bottom */}
      <AdSlot size="rectangle" className="mt-8" />

      {/* Back to Blog */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <Link href={`/${locale}/blog`} className="text-blue-600 font-medium hover:text-blue-700">
          ← {t('backToBlog')}
        </Link>
      </div>
    </article>
  );
}
