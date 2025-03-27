import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // For now, this is a placeholder middleware that will be expanded
  // to handle authentication, redirects, and other application logic
  
  // Example: Logging requests in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Middleware] ${request.method} ${request.nextUrl.pathname}`);
  }
  
  // Example: Rate limiting could be implemented here
  
  // Example: Authentication check could be implemented here
  
  // Continue to the next middleware or route handler
  return NextResponse.next();
}

// Configure which paths should be processed by this middleware
export const config = {
  matcher: [
    // Add paths that need middleware processing
    // '/api/:path*',  // Apply to all API routes
    // '/dashboard/:path*',  // Apply to dashboard routes (when implemented)
  ],
}; 