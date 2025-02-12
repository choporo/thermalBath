import { NextRequest, NextResponse, userAgent } from "next/server";

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  };
  
  export function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const { device } = userAgent(request);
    const viewport = device.type === "mobile" ? "mobile" : "desktop";
    url.searchParams.set("viewport", viewport);
    return NextResponse.rewrite(url);
  }