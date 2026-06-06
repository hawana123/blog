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
    banner: 'h-[90px] w-full',
    rectangle: 'h-[250px] w-full',
    sidebar: 'h-[600px] w-full',
  };

  return (
    <div className={`ad-slot ${sizeClasses[size]} ${className}`}>
      <span>{t('placeholder')}</span>
    </div>
  );
}
