'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');
  const { locale } = useParams<{ locale: string }>();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">TechPulse</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {locale === 'en'
                ? 'Your guide to smarter technology. In-depth reviews, tutorials, and insights on productivity tools and tech trends.'
                : '您的智慧科技指南。深度评测、教程和生产力工具、科技趋势分析。'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${locale}`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">{navT('home')}</Link></li>
              <li><Link href={`/${locale}/blog`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">{navT('blog')}</Link></li>
              <li><Link href={`/${locale}/about`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">{navT('about')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">{navT('contact')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">{t('legal')}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/privacy`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">{t('privacy')}</Link></li>
              <li><Link href={`/${locale}/terms`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">{t('terms')}</Link></li>
              <li><Link href={`/${locale}/disclaimer`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">{t('disclaimer')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
