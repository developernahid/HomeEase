import { withAuth } from "@/middleware/withAuth";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  const { user } = req;
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/dashboard/admin") && user.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard/user", req.url));
  }

  if (pathname.startsWith("/dashboard/vendor") && user.role !== "vendor") {
    return NextResponse.redirect(new URL("/dashboard/user", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/admin/:path*", "/dashboard/vendor/:path*"],
};
