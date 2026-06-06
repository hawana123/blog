'use client';

import { useState } from 'react';
import ArticleCard from './ArticleCard';
import AdSlot from './AdSlot';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
}

interface BlogListProps {
  posts: BlogPost[];
  categories: string[];
  locale: string;
  labels: {
    title: string;
    subtitle: string;
    allCategories: string;
    noPosts: string;
  };
}

export default function BlogList({ posts, categories, locale, labels }: BlogListProps) {
  const [category, setCategory] = useState<string | null>(null);

  const filteredPosts = category
    ? posts.filter((p) => p.category === category)
    : posts;

  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{labels.title}</h1>
        <p className="text-gray-600">{labels.subtitle}</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {labels.allCategories}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Ad Slot */}
      <AdSlot size="banner" className="mb-8" />

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <ArticleCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              category={post.category}
              date={post.date}
              readingTime={post.readingTime}
              locale={locale}
              index={index}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-12">{labels.noPosts}</p>
      )}

      {/* Bottom Ad Slot */}
      <AdSlot size="rectangle" className="mt-12" />
    </div>
  );
}
