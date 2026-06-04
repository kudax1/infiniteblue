import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDir = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  readTime: string;
  image?: string;
  tags: string[];
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  readTime: string;
  image?: string;
  tags: string[];
}

export function getAllPostSlugs(): string[] {
  const filenames = fs.readdirSync(blogDir);
  return filenames
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => {
    const filePath = path.join(blogDir, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      author: data.author || 'InfiniteBlue',
      readTime: data.readTime || '5 min read',
      image: data.image || '',
      tags: data.tags || [],
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(blogDir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    description: data.description || '',
    author: data.author || 'InfiniteBlue',
    readTime: data.readTime || '5 min read',
    image: data.image || '',
    tags: data.tags || [],
    content: contentHtml,
  };
}
