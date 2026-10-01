import { NextResponse } from "next/server";

const ipNewsletter = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string, limit = 5, windowMs = 600000): boolean {
  const now = Date.now();
  const record = ipNewsletter.get(ip);

  if (!record || now > record.resetTime) {
    ipNewsletter.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= limit) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many subscription attempts. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const rawEmail = body?.email;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!rawEmail || typeof rawEmail !== "string" || !emailRegex.test(rawEmail.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const sanitizedEmail = rawEmail
      .replace(/<[^>]*>/g, "")
      .trim()
      .toLowerCase()
      .slice(0, 100);

    return NextResponse.json({
      success: true,
      message: "Subscribed to celestial forecasts successfully.",
      email: sanitizedEmail,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process subscription at this moment." },
      { status: 500 }
    );
  }
}
