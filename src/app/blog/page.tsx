import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Engineering insights, technical deep-dives, and perspectives on modern software development from the InfiniteBlue team.',
  alternates: { canonical: 'https://infiniteblue.africa/blog' },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        title="Blog &amp; Insights"
        description="Engineering perspectives, technical deep-dives, and lessons from building production software."
      />
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
              >
                {post.image && (
                  <div className="blog-card-image">
                    <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                )}
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-desc">{post.description}</p>
                  <div className="blog-card-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="blog-card-cta">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
