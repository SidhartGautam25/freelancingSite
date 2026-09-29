import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import ContactFooter from "../../components/ContactFooter";
import TableOfContents from "../components/TableOfContents";
import ArticleBody from "../components/ArticleBody";
import {
  getArticle,
  listArticles,
  publicAssetUrl,
  Article,
} from "@/lib/blogApi";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://devlooperstudio.com";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const articles = await listArticles();
    return articles.map((article) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.error("[generateStaticParams] Error fetching articles:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const article = await getArticle(slug);
    const ogImage = article.heroImageUrl
      ? publicAssetUrl(article.heroImageUrl)
      : `${siteUrl}/og-image.png`;

    return {
      title: `${article.title}`,
      description:
        article.excerpt ||
        `Read ${article.title} on devlooper studio engineering publication.`,
      alternates: {
        canonical: `${siteUrl}/blog/${article.slug}`,
      },
      openGraph: {
        title: `${article.title} | devlooper studio`,
        description:
          article.excerpt ||
          "Read this engineering guide on devlooper studio publication.",
        url: `${siteUrl}/blog/${article.slug}`,
        type: "article",
        publishedTime: article.publishedAt || undefined,
        modifiedTime: article.updatedAt || undefined,
        authors: article.authors?.map((a) => a.name) || [
          article.authorName || "devlooper studio",
        ],
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.excerpt || undefined,
        images: [ogImage],
      },
    };
  } catch {
    return {
      title: "Article Not Found",
      description: "The requested engineering article could not be found.",
    };
  }
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;

  let article: Article;
  try {
    article = await getArticle(slug);
  } catch (error) {
    console.error(
      `[ArticleDetailPage] Error fetching article "${slug}":`,
      error,
    );
    notFound();
  }

  const authorDisplay =
    article.authors && article.authors.length > 0
      ? article.authors.map((a) => a.name).join(", ")
      : article.authorName || "DevLooper Engineering";

  const formatLocalDate = (isoString: string | null) => {
    if (!isoString) return null;
    try {
      return new Date(isoString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return null;
    }
  };

  const writtenDate = formatLocalDate(article.publishedAt);
  const updatedDate =
    article.updatedAt && article.updatedAt !== article.publishedAt
      ? formatLocalDate(article.updatedAt)
      : null;

  // JSON-LD BlogPosting Schema
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt || article.title,
    image: article.heroImageUrl
      ? publicAssetUrl(article.heroImageUrl)
      : `${siteUrl}/og-image.png`,
    datePublished: article.publishedAt || article.createdAt,
    dateModified: article.updatedAt || article.createdAt,
    author: {
      "@type": "Person",
      name: authorDisplay,
    },
    publisher: {
      "@type": "Organization",
      name: "devlooper studio",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/brand-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <script
        id="article-blog-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdArticle),
        }}
      />

      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient atmospheric lighting */}
        <div className="absolute top-16 left-1/3 w-[500px] h-[300px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute top-80 right-1/4 w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-300 truncate max-w-xs sm:max-w-md">
              {article.title}
            </span>
          </div>

          {/* Article Header Card */}
          <header className="mb-12 max-w-4xl">
            {/* Tech Stack Badges */}
            {article.techStacks && article.techStacks.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {article.techStacks.map((stack) => (
                  <Link
                    key={stack.id}
                    href={`/blog?techStack=${encodeURIComponent(stack.slug)}`}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/25 transition-colors"
                  >
                    {stack.name}
                  </Link>
                ))}
              </div>
            )}

            {/* H1 Heading directly from article.title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              {article.title}
            </h1>

            {/* Excerpt if present */}
            {article.excerpt && (
              <p className="text-lg sm:text-xl text-slate-300/90 leading-relaxed mb-6 font-normal">
                {article.excerpt}
              </p>
            )}

            {/* Byline */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-slate-200 font-medium">
                <span className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs border border-cyan-500/30">
                  {authorDisplay.charAt(0).toUpperCase()}
                </span>
                <span>{authorDisplay}</span>
              </div>

              {article.language && (
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                  {article.language}
                </span>
              )}

              {writtenDate && <span>Written on {writtenDate}</span>}

              {updatedDate && (
                <span className="text-slate-500">• Updated {updatedDate}</span>
              )}
            </div>
          </header>

          {/* Full-width Hero Image if present */}
          {article.heroImageUrl && (
            <div className="mb-14 rounded-3xl overflow-hidden border border-white/10 bg-[#070b14] shadow-2xl max-w-5xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={publicAssetUrl(article.heroImageUrl)}
                alt={article.title}
                className="w-full max-h-[600px] object-cover"
                loading="eager"
              />
            </div>
          )}

          {/* Main 2-Column Content Layout (Article Body + Sticky TOC Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start max-w-6xl">
            {/* Left Column: Article Blocks */}
            <div className="min-w-0">
              <ArticleBody blocks={article.content?.blocks || []} />

              {/* End of Article Divider & CTA */}
              <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Have questions about this architecture?
                  </h3>
                  <p className="text-sm text-slate-400">
                    Our engineering studio builds and deploys scalable
                    production platforms.
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg whitespace-nowrap"
                >
                  Talk to Engineers &rarr;
                </Link>
              </div>
            </div>

            {/* Right Column: Sticky Table of Contents Sidebar */}
            <aside className="hidden lg:block sticky top-28 space-y-6">
              <TableOfContents toc={article.toc || []} />

              {/* Share / Back to Blog Card */}
              <div className="p-5 rounded-2xl bg-white/[0.015] border border-white/5 text-xs space-y-3">
                <span className="font-semibold text-slate-300 block uppercase tracking-wider">
                  Navigation
                </span>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  &larr; Back to all articles
                </Link>
              </div>
            </aside>
          </div>

          {/* Related Articles Section */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <section className="mt-24 pt-16 border-t border-white/10 max-w-6xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs uppercase font-semibold text-cyan-400 tracking-wider block mb-1">
                    Keep Reading
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Related Engineering Articles
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View All &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {article.relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="group rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 p-5 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div>
                      {rel.heroImageUrl && (
                        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-[#070b14]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={publicAssetUrl(rel.heroImageUrl)}
                            alt={rel.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <h3 className="font-bold text-white text-base leading-snug group-hover:text-cyan-200 transition-colors line-clamp-2 mb-2">
                        {rel.title}
                      </h3>
                      {rel.excerpt && (
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {rel.excerpt}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                      <span>Read article</span>
                      <svg
                        className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
