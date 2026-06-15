'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const t = useTranslations('toc');
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Extract headings from the article content
    const article = document.querySelector('article');
    if (!article) return;

    const headings = article.querySelectorAll('h2, h3');
    const tocItems: TocItem[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }
      tocItems.push({
        id,
        text: heading.textContent || '',
        level: heading.tagName === 'H2' ? 2 : 3,
      });
    });

    setItems(tocItems);

    // IntersectionObserver for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (items.length < 3) return null;

  return (
    <nav className="bg-gray-50 rounded-lg p-5 mb-8">
      <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
        {t('title')}
      </h2>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`text-left w-full text-sm py-1 px-2 rounded transition-colors ${
                item.level === 3 ? 'pl-5' : ''
              } ${
                activeId === item.id
                  ? 'text-blue-600 bg-blue-50 font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
