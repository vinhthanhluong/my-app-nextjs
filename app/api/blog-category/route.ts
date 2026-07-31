import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("API HIT");

    const res = await fetch(
      "https://tinycard.infinityfree.me/wp/wp-json/wp/v2/blog-category",
      {
        cache: "no-store",
      }
    );

    console.log("STATUS:", res.status);

    const text = await res.text();

    console.log("BODY:", text);

    return new NextResponse(text, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("ERROR:", err);

    return NextResponse.json(
      {
        error: String(err),
      },
      {
        status: 500,
      }
    );
  }
}