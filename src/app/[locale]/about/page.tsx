import { getTranslations } from 'next-intl/server';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations('about');

  return (
    <div className="container-custom py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">{t('title')}</h1>

      <div className="prose">
        <p>{t('p1')}</p>
        <p>{t('p2')}</p>
        <p>{t('p3')}</p>
        <p>{t('p4')}</p>

        <h2>{t('mission')}</h2>
        <p>{t('missionText')}</p>

        <h2>{t('team')}</h2>
        <p>{t('teamText')}</p>
      </div>
    </div>
  );
}
