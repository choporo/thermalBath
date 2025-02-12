import type { MetadataRoute } from "next";

export default function robots():MetadataRoute.Robots{
    return{
        rules:{
            userAgent: "*",
            allow: ["/", "/properties", "/about"],
            disallow: "/admin"
        },
        sitemap: "https://thermalbath.co.kr/sitemap.xml",
        host: "https://thermalbath.co.kr"
    }
}