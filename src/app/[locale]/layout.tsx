import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  return {
    title: {
      default: isEn ? 'TechPulse - Your Guide to Smarter Tech' : 'TechPulse - 您的智慧科技指南',
      template: isEn ? '%s | TechPulse' : '%s | TechPulse',
    },
    description: isEn
      ? 'TechPulse delivers in-depth reviews, tutorials, and insights on productivity tools, software, and technology trends.'
      : 'TechPulse 提供深入的生产力工具评测、软件教程和科技趋势分析。',
    metadataBase: new URL('https://techpulse.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        zh: '/zh',
      },
    },
    openGraph: {
      type: 'website',
      locale: isEn ? 'en_US' : 'zh_CN',
      url: `https://techpulse.com/${locale}`,
      siteName: 'TechPulse',
      title: isEn ? 'TechPulse - Your Guide to Smarter Tech' : 'TechPulse - 您的智慧科技指南',
      description: isEn
        ? 'In-depth reviews, tutorials, and insights on productivity tools and tech trends.'
        : '深度评测、教程和生产力工具、科技趋势分析。',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = routing.locales.includes(rawLocale as 'en' | 'zh')
    ? rawLocale
    : routing.defaultLocale;

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
