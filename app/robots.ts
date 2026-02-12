import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {rules: [
    // 1. 네이버와 구글만 허용 (Allow)
    {
      userAgent: [
        'Yeti',          // 네이버 검색 봇
        'Googlebot',     // 구글 검색 봇
        'Googlebot-Image'// 구글 이미지 봇
      ],
      allow: ['/'],
    },
    // 2. 그 외 모든 봇은 접근 금지 (Disallow)
    {
      userAgent: '*',
      disallow: [
      '/properties/', '/private/', 'admin/'
      ]
    },
  ],
    // sitemap 위치를 명시해두면 착한 봇들이 좋아합니다.
    sitemap: 'https://www.thermalbath.co.kr/sitemap.xml',
  }
}