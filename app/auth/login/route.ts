import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = new URL(req.url, `http://${req.headers.get('host')}`);
  const cookieStore = cookies();
  const formData = await req.formData();
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))

  console.log(email, password)

  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore
  });

  const { data, error } = await supabase
    .auth
    .signInWithPassword({
      email, password,
    });

  if (data) console.log(data);
  if (error) console.log(error);

  if (data?.user) {
    const dashboardUrl = new URL('/admin/dashboard', `http://${req.headers.get('host')}`);
    return NextResponse.redirect(dashboardUrl.toString(), { status: 301 });
  }

  return NextResponse.redirect(url.origin, {
    status: 301
  });
}
