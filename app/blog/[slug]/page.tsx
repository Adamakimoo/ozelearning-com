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
  const url = `https://www.ozelearning.com/blog/${slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: "OZE Learning", url: "https://www.ozelearning.com" }],
    creator: "OZE Learning",
    publisher: "OZE Learning",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      url,
      siteName: "OZE Learning",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["OZE Learning"],
      tags: post.keywords,
      images: [
        {
          url: "/OG-image.png",
          width: 1200,
          height: 630,
          alt: post.metaTitle,
        },
      ],
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: ["/OG-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
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

  const postUrl = `https://www.ozelearning.com/blog/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${postUrl}#article`,
      headline: post.title,
      description: post.metaDescription,
      url: postUrl,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      author: {
        "@type": "Organization",
        "@id": "https://www.ozelearning.com/#organization",
        name: "OZE Learning",
        url: "https://www.ozelearning.com",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.ozelearning.com/#organization",
        name: "OZE Learning",
        url: "https://www.ozelearning.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.ozelearning.com/ozelearning.svg",
          width: 360,
          height: 104,
        },
      },
      image: {
        "@type": "ImageObject",
        url: "https://www.ozelearning.com/OG-image.png",
        width: 1200,
        height: 630,
      },
      keywords: post.keywords.join(", "),
      articleSection: post.category,
      inLanguage: "en-AU",
      mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
      isPartOf: {
        "@type": "Blog",
        "@id": "https://www.ozelearning.com/blog#blog",
        name: "OZE Learning — eLearning Insights",
        publisher: {
          "@id": "https://www.ozelearning.com/#organization",
        },
      },
      about: post.keywords.map((kw) => ({
        "@type": "Thing",
        name: kw,
      })),
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".article-excerpt"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ozelearning.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.ozelearning.com/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <Nav />
      <main>
        {/* Article header */}
        <article className="pt-32 pb-16 bg-white" aria-labelledby="article-title">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-[#3D5A50]">
                <li><Link href="/" className="hover:text-[#0A3A2F] transition-colors">Home</Link></li>
                <li aria-hidden="true" className="text-[#3D5A50]/40">/</li>
                <li><Link href="/blog" className="hover:text-[#0A3A2F] transition-colors">Blog</Link></li>
                <li aria-hidden="true" className="text-[#3D5A50]/40">/</li>
                <li className="text-[#0A3A2F] font-medium truncate max-w-[200px]" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  categoryColours[post.category] ?? "bg-[#EEF2F0] text-[#3D5A50]"
                }`}
              >
                {post.category}
              </span>
              <span className="text-[#3D5A50]/60 text-xs">
                {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="text-[#3D5A50]/60 text-xs">{post.readingTime} min read</span>
            </div>

            {/* Title */}
            <h1
              id="article-title"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A3A2F] leading-tight mb-6"
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="article-excerpt text-[#3D5A50] text-lg leading-relaxed mb-8 border-l-4 border-[#A2E8CE] pl-5">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pb-8 border-b border-[#EEF2F0]">
              <div className="w-10 h-10 rounded-full bg-[#A2E8CE]/20 flex items-center justify-center">
                <span className="text-[#0A3A2F] font-bold text-sm">OZE</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0A3A2F]">OZE Learning</p>
                <p className="text-xs text-[#3D5A50]">Australian EdTech Agency</p>
              </div>
            </div>
          </div>

          {/* Article body */}
          <div className="max-w-3xl mx-auto px-6 lg:px-8 mt-10 prose prose-slate max-w-none">
            {post.sections.map((section, i) => (
              <div key={i} className="mb-8">
                {section.heading && (
                  <h2 className="font-heading text-2xl font-bold text-[#0A3A2F] mb-4 mt-10">
                    {section.heading}
                  </h2>
                )}
                {section.body && (
                  <p className="text-[#3D5A50] leading-relaxed mb-4">
                    {renderBody(section.body)}
                  </p>
                )}
                {section.list && (
                  <ul className="space-y-3 my-6">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex gap-3 items-start text-[#3D5A50]">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A2E8CE] flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{renderBody(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.callout && (
                  <div className="my-8 p-6 rounded-2xl bg-[#A2E8CE]/10 border-l-4 border-[#A2E8CE]">
                    <p className="text-[#0A3A2F] font-medium leading-relaxed">
                      {section.callout}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Keywords */}
          <div className="max-w-3xl mx-auto px-6 lg:px-8 mt-8">
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-full bg-[#F7F9F8] border border-[#EEF2F0] text-xs text-[#3D5A50]"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* In-article CTA — lead capture */}
        <section className="bg-[#0A3A2F] py-16" aria-label="Get a proposal">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-[#A2E8CE] text-xs font-semibold uppercase tracking-widest mb-4">
              Ready to apply this?
            </p>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Let&apos;s build it for your workforce.
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              OZE Learning turns insights like these into programs your people
              actually complete. Get a proposal — we respond within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 rounded-full bg-[#A2E8CE] text-[#0A3A2F] font-semibold hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get a Proposal
              </Link>
              <Link
                href="/#resources"
                className="px-8 py-4 rounded-full border border-[#A2E8CE]/40 text-[#A2E8CE] font-semibold hover:border-[#A2E8CE] hover:bg-[#A2E8CE]/10 transition-all"
              >
                Download Free Resources
              </Link>
            </div>
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="bg-[#F7F9F8] py-16" aria-labelledby="related-heading">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2
                id="related-heading"
                className="font-heading text-2xl font-bold text-[#0A3A2F] mb-8"
              >
                More from {post.category}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block p-6 bg-white rounded-2xl border border-[#EEF2F0] hover:border-[#A2E8CE] hover:shadow-sm transition-all"
                  >
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${
                        categoryColours[r.category] ?? "bg-[#EEF2F0] text-[#3D5A50]"
                      }`}
                    >
                      {r.category}
                    </span>
                    <h3 className="font-heading font-bold text-[#0A3A2F] text-base leading-snug mb-2 group-hover:text-[#0D4D3D] transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-[#3D5A50] text-sm line-clamp-2">{r.excerpt}</p>
                    <p className="mt-3 text-xs text-[#A2E8CE] font-semibold group-hover:underline">
                      Read article →
                    </p>
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
