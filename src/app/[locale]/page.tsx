import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import ArticleCard from '@/components/ArticleCard';
import AdSlot from '@/components/AdSlot';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('home');
  const posts = getAllPosts(locale).slice(0, 6);
  const categories = [...new Set(getAllPosts(locale).map((p) => p.category))];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <Link
            href={`/${locale}/blog`}
            className="inline-block mt-8 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            {t('viewAll')} →
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container-custom py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('featuredCategories')}</h2>
        <div className="flex flex-wrap gap-3">
          {categories.slice(0, 8).map((cat) => (
            <Link
              key={cat}
              href={`/${locale}/blog`}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors border border-blue-200"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Slot - Banner */}
      <section className="container-custom">
        <AdSlot size="banner" className="my-4" />
      </section>

      {/* Latest Posts */}
      <section className="container-custom py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{t('latestPosts')}</h2>
          <Link href={`/${locale}/blog`} className="text-blue-600 text-sm font-medium hover:text-blue-700">
            {t('viewAll')} →
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <ArticleCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                category={post.category}
                date={post.date}
                readingTime={post.readingTime}
                locale={locale}
                index={index}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12">
            {locale === 'en' ? 'Articles coming soon!' : '文章即将发布！'}
          </p>
        )}
      </section>

      {/* Ad Slot - Rectangle */}
      <section className="container-custom py-8">
        <AdSlot size="rectangle" />
      </section>
    </div>
  );
}
