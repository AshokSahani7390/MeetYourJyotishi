import { NextResponse } from "next/server";

// Simple in-memory sliding window rate limiter
const ipRequests = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string, limit = 5, windowMs = 600000): boolean {
  const now = Date.now();
  const record = ipRequests.get(ip);

  if (!record || now > record.resetTime) {
    ipRequests.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= limit) {
    return true;
  }

  record.count += 1;
  return false;
}

// XSS Sanitizer: strips HTML tags and escapes sensitive characters
function sanitizeInput(input: string): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<[^>]*>/g, "") // strip html tags
    .replace(/[&<>"']/g, (m) => {
      switch (m) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#039;";
        default:
          return m;
      }
    })
    .trim();
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before submitting another inquiry." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const rawName = body?.name;
    const rawEmail = body?.email;
    const rawPhone = body?.phone;
    const rawMessage = body?.message;
    const agree = Boolean(body?.agree);

    // Validation
    if (!rawName || typeof rawName !== "string" || rawName.trim().length < 2) {
      return NextResponse.json({ error: "Valid name is required (minimum 2 characters)." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!rawEmail || typeof rawEmail !== "string" || !emailRegex.test(rawEmail.trim())) {
      return NextResponse.json({ error: "Valid email address is required." }, { status: 400 });
    }

    if (!rawMessage || typeof rawMessage !== "string" || rawMessage.trim().length < 5) {
      return NextResponse.json({ error: "Message must be at least 5 characters." }, { status: 400 });
    }

    if (!agree) {
      return NextResponse.json({ error: "You must confirm you are at least 18 years of age." }, { status: 400 });
    }

    // Sanitize values
    const sanitizedData = {
      name: sanitizeInput(rawName).slice(0, 100),
      email: sanitizeInput(rawEmail).slice(0, 100),
      phone: rawPhone ? sanitizeInput(String(rawPhone)).slice(0, 30) : null,
      message: sanitizeInput(rawMessage).slice(0, 2000),
      receivedAt: new Date().toISOString(),
    };

    // Log securely without leaking PII or credentials
    // In production, forward to encrypted CRM / DB queue

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been securely received by our spiritual concierge team.",
      id: Math.random().toString(36).substring(2, 9),
      receivedAt: sanitizedData.receivedAt,
    });
  } catch {
    // Hide sensitive server stack trace from caller
    return NextResponse.json(
      { error: "Unable to process inquiry at this moment. Please try again later." },
      { status: 500 }
    );
  }
}
