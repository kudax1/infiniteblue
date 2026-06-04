import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Define your primary domain
  const primaryDomain = 'infiniteblue.africa';

  // If the request is coming from infinitebluelabs.com or any www version, redirect to the primary domain
  if (
    hostname === 'infinitebluelabs.com' ||
    hostname === 'www.infinitebluelabs.com' ||
    hostname === 'www.infiniteblue.africa' ||
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
