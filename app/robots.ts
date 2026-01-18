import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // 모든 봇에 대해
      allow: '/',     // 메인 페이지는 허용하되
      disallow: [
        '/properties/',  // 데이터 소모가 심한 상세 페이지는 접근 금지
        '/private/',     // (예시) 기타 비공개 경로
        '/admin/',       // (예시) 관리자 페이지
      ],
    },
    // sitemap 위치를 명시해두면 착한 봇들이 좋아합니다.
    sitemap: 'https://www.thermalbath.co.kr/sitemap.xml',
  }
}