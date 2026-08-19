import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const username = process.env.WORDPRESS_USERNAME;
    const password = process.env.WORDPRESS_PASSWORD;

    const auth = Buffer.from(
      `${username}:${password}`
    ).toString("base64");

    // Lấy page từ query của Next.js
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";
    const perPage = searchParams.get("per_page") || "10";

    const res = await fetch(
      // `${process.env.WORDPRESS_API_URL}/blog?_embed&per_page=10`,
      // `${process.env.WORDPRESS_API_URL}/blog?_embed`,
      `${process.env.WORDPRESS_API_URL}/blog?_embed&page=${page}&per_page=${perPage}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Basic ${auth}`,
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        {
          error: "WordPress API error",
          status: res.status,
        },
        {
          status: res.status,
        }
      );
    }

    const data = await res.json();

    // WordPress trả thông tin pagination trong header
    const total = Number(res.headers.get("X-WP-Total") || 0);
    const totalPages = Number(
      res.headers.get("X-WP-TotalPages") || 0
    );

    return NextResponse.json({
      data,
      pagination: {
        page: Number(page),
        perPage: Number(perPage),
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch blogcat",
      },
      {
        status: 500,
      }
    );
  }
}