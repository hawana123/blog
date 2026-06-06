import { getTranslations } from 'next-intl/server';
import { getAllPosts, getCategories } from '@/lib/blog';
import BlogList from '@/components/BlogList';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('blog');
  const allPosts = getAllPosts(locale);
  const categories = getCategories(locale);

  return (
    <BlogList
      posts={allPosts}
      categories={categories}
      locale={locale}
      labels={{
        title: t('title'),
        subtitle: t('subtitle'),
        allCategories: t('allCategories'),
        noPosts: t('noPosts'),
      }}
    />
  );
}
