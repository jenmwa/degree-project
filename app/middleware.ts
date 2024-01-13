import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If the user is not authenticated, redirect them to "/login"
  if (!session) {
    return NextResponse.rewrite(new URL('/login', req.url));
  }

  console.log(session);

  // If the user is authenticated and on the "/login" page, redirect them to "/admin/dashboard"
  if (session && req.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url));
  }

  return res;
}

export const config = {
  // Adjust the matcher to include the relevant pages
  matcher: ['/', '/login', '/admin/dashboard'],
};
