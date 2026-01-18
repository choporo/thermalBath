// import { fetchPropertiesSitemap } from "@/utils/action";
// import type { MetadataRoute } from "next"

// export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
//     const properties = await fetchPropertiesSitemap()
//     const posts = properties.map((post) =>({
//         url: `https://thermalbath.co.kr/properties/${post.id}`,
//         lastModified: post.updateAt,
//         priority: 0.8,
//         changeFrequency: 'hourly' as any 
//     })) 
    
//     const routes = ["", "/about"].map((route) =>({
//         url: `https://thermalbath.co.kr${route}`,
//         lastModified: new Date().toISOString().split("T")[0],
//         changeFrequency: 'hourly' as any 
//     }))
    
//     return[...routes, ...posts]
// }

// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thermalbath.co.kr'

  // 당분간은 정적 페이지만 제공하여 부하를 줄입니다.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`, // 소개 페이지가 있다면
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // 원래는 여기서 DB를 조회해서 properties URL을 map으로 뿌려주지만,
    // 공격이 멈출 때까지는 주석 처리하거나 빼두는 것이 안전합니다.
  ]
}