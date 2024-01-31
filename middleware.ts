import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const supabase = createMiddlewareClient({ req, res })
  const {
    data: { user },
  } = await supabase.auth.getUser()


  if (user) {
    return res
  }

  const redirectUrl = new URL('/login', req.url)
  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: '/admin/dashboard/:path*',
}
