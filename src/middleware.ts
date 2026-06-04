import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Define your primary domain
  const primaryDomain = 'infinitebluelabs.com';

  // If the request is coming from infiniteblue.africa or any www version, redirect to the primary domain
  if (
    hostname === 'infiniteblue.africa' ||
    hostname === 'www.infiniteblue.africa' ||
    hostname === 'www.infinitebluelabs.com' ||
    hostname === 'infiniteblue-agency.web.app' || 
    hostname === 'infiniteblue-agency.firebaseapp.com'
  ) {
    url.hostname = primaryDomain;
    url.port = ''; // Remove port just in case
    url.protocol = 'https:';
    
    // Issue a 301 Permanent Redirect
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Run middleware on all routes except static assets, images, and API routes (if preferred, though API is fine)
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)',
  ],
};
