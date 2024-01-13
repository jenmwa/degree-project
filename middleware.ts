import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next()
  // Create authenticated Supabase Client.
  const supabase = createMiddlewareClient({ req, res })
  // Check if we have a session
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Check auth condition
  if (user) {
    // Authentication successful, forward request to protected route.
    return res
  }

  // Auth condition not met, redirect to login page.
  const redirectUrl = new URL('/login', req.url)
  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: '/admin/dashboard/:path*',
}
