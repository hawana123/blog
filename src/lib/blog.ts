import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  readingTime: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

function getBlogDir(locale: string): string {
  return path.join(BLOG_DIR, locale);
}

export function getAllPosts(locale: string): BlogPost[] {
  const dir = getBlogDir(locale);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || '',
      date: data.date || '',
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      author: data.author || 'TechPulse Team',
      readingTime: stats.text.replace('read', '').trim(),
      content,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, locale: string): BlogPost | null {
  const dir = getBlogDir(locale);
  const filePath = path.join(dir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || '',
    date: data.date || '',
    category: data.category || 'Uncategorized',
    tags: data.tags || [],
    author: data.author || 'TechPulse Team',
    readingTime: stats.text.replace('read', '').trim(),
    content,
  };
}

export function getAllSlugs(locale: string): string[] {
  const dir = getBlogDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''));
}

export function getCategories(locale: string): string[] {
  const posts = getAllPosts(locale);
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories);
}
