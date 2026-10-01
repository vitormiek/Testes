import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleReader } from "@/components/ArticleReader";

export default function ArticlePage(){
  return <>
    <SiteNav/>
    <main className="article-page"><ArticleReader/></main>
    <SiteFooter/>
  </>;
}
