import { compileMDX } from 'next-mdx-remote/rsc';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { getAuthorByName } from '@/lib/authors';
import { routing } from '@/i18n/routing';
import AdSlot from '@/components/AdSlot';
import TableOfContents from '@/components/TableOfContents';
import AuthorCard from '@/components/AuthorCard';
import ShareButtons from '@/components/ShareButtons';
import RelatedPosts from '@/components/RelatedPosts';

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

  const author = getAuthorByName(post.author);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://techpulse.blog';
  const postUrl = `${siteUrl}/${locale}/blog/${slug}`;

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: `${siteUrl}/og-image.png`,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          '@type': 'Person',
          name: post.author,
          url: author ? `${siteUrl}/${locale}/about` : undefined,
        },
        publisher: {
          '@type': 'Organization',
          name: 'TechPulse',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': postUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'en' ? 'Home' : '首页',
            item: `${siteUrl}/${locale}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t('title'),
            item: `${siteUrl}/${locale}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container-custom py-12">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href={`/${locale}`} className="hover:text-blue-600">
            {locale === 'en' ? 'Home' : '首页'}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${locale}/blog`} className="hover:text-blue-600">
            {t('title')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8 max-w-3xl">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>{post.date}</time>
            <span>·</span>
            <span>{post.readingTime} {locale === 'en' ? 'min read' : '分钟阅读'}</span>
          </div>
        </header>

        {/* Share Buttons */}
        <div className="mb-6">
          <ShareButtons title={post.title} url={postUrl} />
        </div>

        {/* Ad Slot - Top */}
        <AdSlot size="banner" className="mb-8" />

        {/* Table of Contents */}
        <TableOfContents />

        {/* MDX Content */}
        <div className="prose max-w-none">{mdxContent}</div>

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

        {/* Author Card */}
        {author && <AuthorCard author={author} locale={locale} />}

        {/* Ad Slot - Bottom */}
        <AdSlot size="rectangle" className="mt-8" />

        {/* Related Posts */}
        <RelatedPosts
          locale={locale}
          currentSlug={slug}
          category={post.category}
          tags={post.tags}
        />

        {/* Back to Blog */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link href={`/${locale}/blog`} className="text-blue-600 font-medium hover:text-blue-700">
            ← {t('backToBlog')}
          </Link>
        </div>
      </article>
    </>
  );
}
