/**
 * Public Blog API Client for DevLooper Articles
 * Read-only client interacting with the workspace public article endpoints.
 */

export type ArticleAuthor = {
  name: string;
};

export type TechStack = {
  id: string;
  name: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
  _count?: { articles: number };
};

export type ArticleTocItem = {
  id: string; // same as heading block.id — use as DOM id
  title: string; // sidebar label: tocLabel if set, else heading text
  level: 1 | 2 | 3 | 4;
};

export type RelatedArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  heroImageUrl: string | null;
};

export type ArticleBlock =
  | {
      id: string;
      type: "heading";
      level: 1 | 2 | 3 | 4;
      text: string; // on-page heading text
      tocLabel?: string; // sidebar title if present; do NOT use this as the heading
    }
  | {
      id: string;
      type: "paragraph";
      html: string; // sanitized HTML: mark, u, strong, em, b, i, br, span
    }
  | {
      id: string;
      type: "code";
      language: string; // typescript, javascript, python, go, rust, java, sql, bash, json, html, css, prisma, text, ...
      code: string; // raw source code; NOT HTML
    }
  | {
      id: string;
      type: "image";
      url: string;
      alt: string;
      caption?: string;
      size?: "default" | "medium" | "small" | "original";
    };

export type ArticleSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  heroImageUrl: string | null;
  language: string | null;
  authorName: string | null;
  status: "PUBLISHED";
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  authors: ArticleAuthor[];
  techStacks: TechStack[];
  relatedArticles: RelatedArticle[];
  toc: ArticleTocItem[];
};

export type Article = ArticleSummary & {
  content: { blocks: ArticleBlock[] };
};

const getBaseUrl = (): string =>
  (
    process.env.NEXT_PUBLIC_BACKEND_API_URL ||
    "https://workspace.devlooperstudio.com"
  ).replace(/\/+$/, "");

export function publicAssetUrl(path: string | null | undefined): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = (
    process.env.NEXT_PUBLIC_ASSET_BASE_URL ||
    process.env.NEXT_PUBLIC_BACKEND_API_URL ||
    "https://workspace.devlooperstudio.com"
  ).replace(/\/+$/, "");
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
}

async function apiGet<T>(path: string): Promise<T> {
  const url = `${getBaseUrl()}${path.startsWith("/") ? "" : "/"}${path}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    let errorMessage = `API request failed with status ${res.status}`;
    try {
      const errJson = await res.json();
      errorMessage = errJson.error || errorMessage;
    } catch {
      // non-JSON error
    }
    const error = new Error(errorMessage) as Error & { status: number };
    error.status = res.status;
    throw error;
  }

  const json = await res.json();
  if (!json.success) {
    const error = new Error(
      json.error || "Operation not successful",
    ) as Error & {
      status: number;
    };
    error.status = res.status;
    throw error;
  }

  return json.data as T;
}

export async function listArticles(params?: {
  techStack?: string;
  language?: string;
  q?: string;
}): Promise<ArticleSummary[]> {
  const searchParams = new URLSearchParams();
  if (params?.techStack) searchParams.set("techStack", params.techStack);
  if (params?.language) searchParams.set("language", params.language);
  if (params?.q) searchParams.set("q", params.q);

  const query = searchParams.toString();
  const endpoint = `/api/public/articles${query ? `?${query}` : ""}`;
  return apiGet<ArticleSummary[]>(endpoint);
}

export async function getArticle(slug: string): Promise<Article> {
  return apiGet<Article>(`/api/public/articles/${encodeURIComponent(slug)}`);
}

export async function listTechStacks(): Promise<TechStack[]> {
  return apiGet<TechStack[]>("/api/public/tech-stacks");
}
