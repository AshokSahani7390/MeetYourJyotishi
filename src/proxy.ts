import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect Admin routes from unauthorized access
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    return new NextResponse(
      JSON.stringify({
        error: "Forbidden",
        message: "Celestial sanctuary admin access restricted to authorized personnel.",
      }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const response = NextResponse.next();

  // Additional security headers on every response
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static files, _next, images, and fonts
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp|otf|woff|woff2|mp3|riv)$).*)",
  ],
};
