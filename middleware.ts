import { NextRequest, NextResponse, userAgent } from "next/server";

const BLOCKED_BOTS = [
  "GPTBot",        // ChatGPT
  "Bytespider",    // 틱톡 (매우 공격적임)
  "ClaudeBot",     // Claude AI
  "CCBot",         // Common Crawl
  "DotBot",        // Moz
  "magpie-crawler",
  "omgili",
  "img2dataset",
  "FacebookBot",   // (선택) 페북 스크랩 봇
  "Twitterbot",    // (선택) 트위터 스크랩 봇
  "Python",        // 파이썬 스크립트
  "curl",          // 터미널 요청
  "Wget",          // 터미널 요청
  "Go-http-client" // Go 언어 스크립트
];

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