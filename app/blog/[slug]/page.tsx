import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllSlugs, posts } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.metaTitle} | OZE Learning`,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      tags: post.keywords,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

const categoryColours: Record<string, string> = {
  Technology: "bg-[#A2E8CE]/15 text-[#0A3A2F]",
  Strategy: "bg-[#C3B1E1]/15 text-[#3D2D6B]",
  "Instructional Design": "bg-[#EEF2F0] text-[#3D5A50]",
};

function renderBody(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-[#0A3A2F]">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Organization", name: "OZE Learning", url: "https://ozelearning.com" },
    publisher: {
      "@type": "Organization",
      name: "OZE Learning",
      logo: { "@type": "ImageObject", url: "https://ozelearning.com/ozelearning.svg" },
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-AU",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        {/* Article header */}
        <header className="bg-[#0A3A2F] pt-36 pb-16 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/blog"
                className="text-[#A2E8CE]/60 text-xs font-semibold tracking-[0.12em] uppercase hover:text-[#A2E8CE] transition-colors flex items-center gap-1.5"
              >
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Blog
              </Link>
              <span className="text-[#A2E8CE]/30" aria-hidden="true">/</span>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[post.category] ?? "bg-[#EEF2F0] text-[#3D5A50]"}`}
              >
                {post.category}
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8">{post.excerpt}</p>

            <div className="flex items-center gap-6 text-sm text-[#A2E8CE]/50">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>{post.readingTime} min read</span>
              <span>OZE Learning</span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article className="bg-[#F7F9F8] py-16 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose-oze space-y-8">
              {post.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="font-heading font-bold text-2xl text-[#0A3A2F] mb-4 mt-10 first:mt-0">
                      {section.heading}
                    </h2>
                  )}
                  {section.body && (
                    <p className="text-[#3D5A50] leading-relaxed text-[1.0625rem]">
                      {renderBody(section.body)}
                    </p>
                  )}
                  {section.list && (
                    <ul className="space-y-3 mt-4">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex gap-3 text-[#3D5A50] text-[1.0625rem] leading-relaxed">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A2E8CE]" aria-hidden="true" />
                          <span>{renderBody(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.callout && (
                    <blockquote className="my-6 border-l-4 border-[#A2E8CE] pl-6 py-2 bg-[#A2E8CE]/8 rounded-r-xl">
                      <p className="text-[#0A3A2F] font-medium leading-relaxed italic">
                        {section.callout}
                      </p>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            {/* Keywords */}
            <div className="mt-12 pt-8 border-t border-[#EEF2F0]">
              <p className="text-xs font-semibold text-[#3D5A50] uppercase tracking-wider mb-3">Topics</p>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((kw) => (
                  <span key={kw} className="text-xs px-3 py-1.5 rounded-full bg-white border border-[#EEF2F0] text-[#3D5A50]">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* CTA strip */}
        <section className="bg-[#0A3A2F] py-16 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#A2E8CE]/60 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Ready to build something better?
            </p>
            <h2 className="font-heading font-bold text-3xl text-white mb-6">
              Let&apos;s turn this thinking into your next program.
            </h2>
            <Link
              href="/#contact"
              className="inline-flex px-8 py-4 rounded-full bg-[#A2E8CE] text-[#0A3A2F] font-semibold text-sm hover:bg-white transition-colors"
            >
              Start a Conversation →
            </Link>
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="bg-[#F7F9F8] py-16 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0D4D3D] mb-8">
                More in {post.category}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group">
                    <article className="bg-white rounded-2xl p-6 border border-[#EEF2F0] hover:border-[#A2E8CE] hover:shadow-md transition-all h-full">
                      <p className="text-xs text-[#3D5A50] mb-3">{rel.readingTime} min read</p>
                      <h3 className="font-heading font-bold text-base text-[#0A3A2F] leading-snug group-hover:text-[#0D4D3D] transition-colors">
                        {rel.title}
                      </h3>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
