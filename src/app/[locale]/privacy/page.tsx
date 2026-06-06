import { getTranslations } from 'next-intl/server';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations('privacy');

  const sections = [
    { title: t('s1Title'), text: t('s1Text') },
    { title: t('s2Title'), text: t('s2Text') },
    { title: t('s3Title'), text: t('s3Text') },
    { title: t('s4Title'), text: t('s4Text') },
    { title: t('s5Title'), text: t('s5Text') },
    { title: t('s6Title'), text: t('s6Text') },
    { title: t('s7Title'), text: t('s7Text') },
    { title: t('s8Title'), text: t('s8Text') },
  ];

  return (
    <div className="container-custom py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{t('title')}</h1>
      <p className="text-sm text-gray-500 mb-8">{t('lastUpdated')}</p>
      <div className="prose">
        {sections.map((s, i) => (
          <div key={i}>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
