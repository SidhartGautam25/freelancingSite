import { NextRequest, NextResponse } from "next/server";
import { listArticles } from "@/lib/blogApi";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "3", 10);

    const articles = await listArticles();
    const sliced = (articles || []).slice(0, Math.max(1, limit));

    return NextResponse.json({
      success: true,
      data: sliced,
    });
  } catch (error) {
    console.error("[GET /api/articles/recent] Error fetching articles:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch recent articles",
        data: [],
      },
      { status: 500 },
    );
  }
}
