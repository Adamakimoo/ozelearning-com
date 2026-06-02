import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { posts, categories } from "@/lib/posts";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.ozelearning.com/blog#blog",
  name: "OZE Learning — eLearning Insights",
  description:
    "Expert articles on eLearning development, compliance training, instructional design, and workforce learning strategy from OZE Learning.",
  url: "https://www.ozelearning.com/blog",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.ozelearning.com/#organization",
    name: "OZE Learning",
  },
  inLanguage: "en-AU",
};

export const metadata: Metadata = {
  title: "eLearning Insights & EdTech Blog",
  description:
    "Expert articles on eLearning development, compliance training, instructional design, SCORM vs xAPI, microlearning, and workforce training strategy from OZE Learning — Australia's leading EdTech agency.",
  keywords: [
    "eLearning blog",
    "instructional design articles",
    "compliance training tips",
    "xAPI SCORM guide",
    "microlearning workplace",
    "EdTech insights Australia",
    "corporate training strategy",
    "L&D resources",
  ],
  alternates: {
    canonical: "https://www.ozelearning.com/blog",
  },
  openGraph: {
    title: "eLearning Insights & EdTech Blog | OZE Learning",
    description:
      "Expert articles on eLearning, compliance training, instructional design, and workforce learning strategy from OZE Learning.",
    type: "website",
    url: "https://www.ozelearning.com/blog",
    siteName: "OZE Learning",
    images: [
      {
        url: "/OG-image.png",
        width: 1200,
        height: 630,
        alt: "OZE Learning Blog — eLearning Insights",
      },
    ],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "eLearning Insights & EdTech Blog | OZE Learning",
    description:
      "Expert articles on eLearning, compliance training, and workforce learning strategy.",
    images: ["/OG-image.png"],
  },
};

const categoryColours: Record<string, string> = {
  Technology: "bg-[#A2E8CE]/15 text-[#0A3A2F]",
  Strategy: "bg-[#C3B1E1]/15 text-[#3D2D6B]",
  "Instructional Design": "bg-[#EEF2F0] text-[#3D5A50]",
};

function CategoryChip({ category }: { category: string }) {
  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColours[category] ?? "bg-[#EEF2F0] text-[#3D5A50]"}`}>
      {category}
    </span>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = posts.slice().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#0A3A2F] pt-36 pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#A2E8CE]/60 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Insights & Strategy
            </p>
            <h1 className="font-heading text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-6">
              eLearning that{" "}
              <span className="text-[#A2E8CE]">starts a conversation.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Practical thinking on digital learning design, edTech, compliance training,
              and building workforces that actually grow.
            </p>
          </div>
        </section>

        {/* Category filter */}
        <section className="bg-[#F7F9F8] border-b border-[#EEF2F0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-wrap gap-3 items-center">
            <span className="text-xs font-semibold text-[#3D5A50] uppercase tracking-wider mr-2">Filter:</span>
            {["All", ...categories].map((cat) => (
              <span key={cat} className="text-xs px-4 py-1.5 rounded-full border border-[#EEF2F0] bg-white text-[#3D5A50] cursor-pointer hover:border-[#A2E8CE] transition-colors">
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* Featured post */}
        <section className="bg-[#F7F9F8] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0D4D3D] mb-6">Featured</p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="grid lg:grid-cols-5 gap-8 bg-white rounded-3xl p-8 lg:p-12 border border-[#EEF2F0] shadow-sm hover:border-[#A2E8CE] hover:shadow-md transition-all">
                <div className="lg:col-span-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <CategoryChip category={featured.category} />
                      <span className="text-[#3D5A50] text-xs">{featured.readingTime} min read</span>
                      <time dateTime={featured.publishedAt} className="text-[#3D5A50] text-xs">
                        {new Date(featured.publishedAt).toLocaleDateString("en-AU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="font-heading font-bold text-2xl lg:text-3xl text-[#0A3A2F] leading-snug mb-4 group-hover:text-[#0D4D3D] transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-[#3D5A50] leading-relaxed mb-6">{featured.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0A3A2F] group-hover:gap-4 transition-all">
                    Read article
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="lg:col-span-2 bg-[#0A3A2F] rounded-2xl flex items-center justify-center p-10 min-h-[200px]">
                  <div className="text-center">
                    <p className="text-[#A2E8CE]/50 text-xs tracking-widest uppercase mb-3">OZE Learning</p>
                    <p className="font-heading font-bold text-[#A2E8CE] text-lg leading-snug">
                      {featured.category}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Article grid */}
        <section className="bg-[#F7F9F8] pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-2xl p-7 border border-[#EEF2F0] shadow-sm hover:border-[#A2E8CE] hover:shadow-md transition-all h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <CategoryChip category={post.category} />
                      <span className="text-[#3D5A50] text-xs">{post.readingTime} min read</span>
                    </div>
                    <h2 className="font-heading font-bold text-lg text-[#0A3A2F] leading-snug mb-3 group-hover:text-[#0D4D3D] transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-[#3D5A50] text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#EEF2F0]">
                      <time dateTime={post.publishedAt} className="text-xs text-[#3D5A50]">
                        {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-[#A2E8CE] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Blog CTA */}
        <section className="bg-[#F7F9F8] pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center p-10 bg-[#0A3A2F] rounded-3xl">
              <h2 className="font-heading text-2xl font-bold text-white mb-3">
                Ready to put these ideas into practice?
              </h2>
              <p className="text-white/60 mb-6 max-w-xl mx-auto">
                OZE Learning builds the programs these articles describe. Get a proposal within one business day.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 rounded-full bg-[#A2E8CE] text-[#0A3A2F] font-semibold hover:bg-white transition-colors"
              >
                Get a Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
