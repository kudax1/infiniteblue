import { Metadata } from 'next';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://infiniteblue.africa/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article className="blog-article">
      <div className="blog-article-header">
        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
          <Link href="/blog" className="blog-back-link">
            <ArrowLeft size={16} /> All Articles
          </Link>
          <h1>{post.title}</h1>
          <div className="blog-article-meta">
            <span><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span><Clock size={14} /> {post.readTime}</span>
            <span>By {post.author}</span>
          </div>
          <div className="blog-card-tags" style={{ justifyContent: 'center', marginTop: '16px' }}>
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>{tag}</span>
            ))}
          </div>
        </div>
        {post.image && (
          <div className="blog-article-bg-image">
            <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover', opacity: 0.3 }} priority />
          </div>
        )}
      </div>
      <div className="blog-article-body">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-main)', marginBottom: '16px' }}>
              Have a project in mind? We&apos;d love to discuss how we can help.
            </p>
            <Link href="/contact" className="btn">
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
