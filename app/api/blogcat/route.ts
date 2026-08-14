import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = process.env.WORDPRESS_USERNAME;
    const password = process.env.WORDPRESS_PASSWORD;

    const auth = Buffer.from(
      `${username}:${password}`
    ).toString("base64");

    const res = await fetch(
      `${process.env.WORDPRESS_API_URL}/blogcat`,
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

    return NextResponse.json(data);
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