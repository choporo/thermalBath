type Sitemap = Array<{
    url: string
    lastModified?: string | Date
    changeFrequency?:
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "yearly"
        | "never"
    priority?: number
}>

type Robots = {
    rules:
    |{
        userAgent?: string | string[]
        allow?: string | string[]
        disallow?: string | string[]
        crawDelay?: number
    }
    | Array<{
        userAgent?: string | string[]
        allow?: string | string[]
        disallow?: string | string[]
        crawDelay?: number
        }>
    sitemap?:string | string[]
    host?: string
}