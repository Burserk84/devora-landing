import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fa"];
const defaultLocale = "fa";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // If no locale is present, redirect to the default locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  // e.g. incoming request is /products -> redirected to /fa/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all paths that should not be internationalized. This includes:
    // - API routes
    // - Next.js internal files (_next)
    // - Static files (e.g., images, fonts) by checking for a dot in the path
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
};
