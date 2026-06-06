import { getTranslations } from 'next-intl/server';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations('contact');

  return (
    <div className="container-custom py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t('title')}</h1>
      <p className="text-gray-600 mb-8">{t('subtitle')}</p>

      <div className="max-w-md">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">{t('info')}</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-700">{t('emailLabel')}</p>
              <p className="text-sm text-blue-600">neeleon@gmail.com</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">{t('address')}</p>
              <p className="text-sm text-gray-600">{t('addressValue')}</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 mt-6">
          <p className="text-sm text-blue-800">{t('responseTime')}</p>
        </div>
      </div>
    </div>
  );
}
