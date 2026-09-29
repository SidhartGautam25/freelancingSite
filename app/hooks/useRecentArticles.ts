"use client";

import { useState, useEffect, useCallback } from "react";
import { ArticleSummary } from "@/lib/blogApi";

export interface UseRecentArticlesResult {
  articles: ArticleSummary[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useRecentArticles(limit: number = 3): UseRecentArticlesResult {
  const [articles, setArticles] = useState<ArticleSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // First attempt: Call our local internal Next.js route handler
      const res = await fetch(`/api/articles/recent?limit=${limit}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setArticles(json.data);
          setLoading(false);
          return;
        }
      }

      // Fallback: If local route had an issue, attempt direct workspace public endpoint
      const backendUrl =
        process.env.NEXT_PUBLIC_BACKEND_API_URL ||
        "https://workspace.devlooperstudio.com";
      const directRes = await fetch(`${backendUrl}/api/public/articles`);
      if (directRes.ok) {
        const directJson = await directRes.json();
        if (directJson.success && Array.isArray(directJson.data)) {
          setArticles(directJson.data.slice(0, limit));
          setLoading(false);
          return;
        }
      }

      throw new Error("Unable to load latest articles at this time");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to load articles";
      console.warn("[useRecentArticles] Error:", message);
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return {
    articles,
    loading,
    error,
    refetch: fetchArticles,
  };
}
