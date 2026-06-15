'use client';

import { useTranslations } from 'next-intl';

interface AdSlotProps {
  className?: string;
  size?: 'banner' | 'rectangle' | 'sidebar';
}

/**
 * AdSlot - Placeholder component for Google AdSense ad units.
 * After AdSense approval, replace the placeholder div with actual AdSense code:
 * <ins className="adsbygoogle"
 *      style={{ display: 'block' }}
 *      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
 *      data-ad-slot="XXXXXXXXXX"
 *      data-ad-format="auto"
 *      data-full-width-responsive="true" />
 */
export default function AdSlot({ className = '', size = 'banner' }: AdSlotProps) {
  const t = useTranslations('adsense');

  const sizeClasses = {
    banner: 'min-h-[90px] w-full',
    rectangle: 'min-h-[250px] w-full',
    sidebar: 'min-h-[600px] w-full',
  };

  return (
    <div className={`ad-slot ${sizeClasses[size]} ${className}`}>
      <div className="w-full h-full bg-gray-50 border border-gray-200 rounded flex flex-col items-center justify-center">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
          {t('placeholder')}
        </span>
        <span className="text-[10px] text-gray-300">AdSense</span>
      </div>
    </div>
  );
}
