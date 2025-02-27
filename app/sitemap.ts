import { fetchPropertiesSitemap } from "@/utils/action";
import type { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap>{
    const properties = await fetchPropertiesSitemap()
    const posts = properties.map((post) =>({
        url: `https://thermalbath.co.kr/properties/${post.id}`,
        lastModified: post.updateAt
    }))
    
    const routes = ["", "/about"].map((route) =>({
        url: `https://thermalbath.co.kr${route}`,
        lastModified: new Date().toISOString().split("T")[0]
    }))
    
    return[...routes, ...posts]
}