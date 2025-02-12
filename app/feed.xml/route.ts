import { fetchPropertiesRss } from "@/utils/action";
import RSS from "rss";

export async function GET() {   
    const allPosts = await fetchPropertiesRss();
    const feed = new RSS({
       title: '온천 갈 지도 | 국내 온천 도감',           description: "우라나라 사람들도 잘 모르는 국내 온천 소개",
       generator: 'RSS for Node and Next.js',
       feed_url: 'https://www.thermalbath.co.kr/feed.xml',
       site_url: 'https://www.thermalbath.co.kr',copyright: `Copyright ${new Date().getFullYear().toString()}`,
       language: 'ko-Kr', 
       pubDate: new Date().toUTCString(),
       ttl: 60,       
    });

    allPosts.map((post) =>{
        feed.item({
            title:post.name,
            description:post.feature,
            url:`https://thermalbath.co.kr/properties/${post.id}`,
            date: post.updateAt
        })
    })
     return new Response(feed.xml(), {
        headers:{
            "Content-Type": "application/atom+xml; charset=utf-8"
        }
     })
}
   
