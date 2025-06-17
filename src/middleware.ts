// src/middleware.ts

import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en", "pt-br"];
const defaultLocale = "pt-br";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (locales.some((loc) => pathname.startsWith(`/${loc}`))) {
    return NextResponse.next();
  }
  const locale = getLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next|static|favicon.ico|images|svg|robots.txt|sitemap.xml).*)",
  ],
};
