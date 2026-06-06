import Link from 'next/link';
import { getCoverImage } from '@/lib/coverImages';

export interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
  readingTime: string;
  locale: string;
  index: number;
}

export default function ArticleCard({ title, excerpt, slug, category, date, readingTime, locale, index }: ArticleCardProps) {
  const coverSrc = getCoverImage(category, index);

  return (
    <article className="card-hover bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="relative h-48 overflow-hidden">
        <img
          src={coverSrc}
          alt={title}
          className="w-full h-full object-cover"
          width={400}
          height={200}
        />
        <span className="absolute top-3 left-3 bg-white/90 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          <Link href={`/${locale}/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <time>{date}</time>
          <span>{readingTime} {locale === 'zh' ? '分钟' : 'min'}</span>
        </div>
        <Link
          href={`/${locale}/blog/${slug}`}
          className="inline-block mt-3 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
        >
          {locale === 'zh' ? '阅读更多 →' : 'Read More →'}
        </Link>
      </div>
    </article>
  );
}
