import { getTranslations } from 'next-intl/server';
import { getAllAuthors } from '@/lib/authors';
import AuthorCard from '@/components/AuthorCard';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('about');
  const authors = getAllAuthors();

  return (
    <div className="container-custom py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">{t('title')}</h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed">{t('intro')}</p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">{t('mission')}</h2>
          <p className="text-blue-800 leading-relaxed">{t('missionText')}</p>
        </div>

        <h2>{t('storyTitle')}</h2>
        <p>{t('storyP1')}</p>
        <p>{t('storyP2')}</p>
        <p>{t('storyP3')}</p>

        <h2>{t('valuesTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-1">{t('value1Title')}</h3>
            <p className="text-sm text-gray-600">{t('value1Text')}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-1">{t('value2Title')}</h3>
            <p className="text-sm text-gray-600">{t('value2Text')}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-1">{t('value3Title')}</h3>
            <p className="text-sm text-gray-600">{t('value3Text')}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-1">{t('value4Title')}</h3>
            <p className="text-sm text-gray-600">{t('value4Text')}</p>
          </div>
        </div>

        <h2>{t('teamTitle')}</h2>
        <p className="text-gray-600 mb-6">{t('teamIntro')}</p>
      </div>

      <div className="space-y-4">
        {authors.map((author) => (
          <AuthorCard key={author.slug} author={author} locale={locale} />
        ))}
      </div>

      <div className="prose max-w-none mt-10">
        <h2>{t('editorialTitle')}</h2>
        <p>{t('editorialP1')}</p>
        <p>{t('editorialP2')}</p>
        <ul>
          <li>{t('editorialBullet1')}</li>
          <li>{t('editorialBullet2')}</li>
          <li>{t('editorialBullet3')}</li>
          <li>{t('editorialBullet4')}</li>
        </ul>
      </div>
    </div>
  );
}
