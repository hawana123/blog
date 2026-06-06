'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const { locale } = useParams<{ locale: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/(en|zh)/, '');
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`;
    
    // Save preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale);
    }
    
    router.push(newPath);
  };

  return (
    <button
      onClick={handleSwitch}
      className="px-3 py-1.5 rounded-lg border border-blue-300 bg-blue-50 text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-400 transition-colors"
      aria-label={locale === 'en' ? '切换到中文' : 'Switch to English'}
    >
      {locale === 'en' ? '🌐 中文' : '🌐 EN'}
    </button>
  );
}
