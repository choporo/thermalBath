import { fetchPropertiesSitemap } from "@/utils/action";
import type { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap>{
    const properties = await fetchPropertiesSitemap()
    const posts = properties.map((post) =>({
        url: `http://localhost:3000/properties/${post.id}`,
        lastModified: post.updateAt
    }))
    
    const routes = ["", "/properties", "/about"].map((route) =>({
        url: `http://localhost:3000${route}`,
        lastModified: new Date().toISOString().split("T")[0]
    }))
    
    return[...routes, ...posts]
}