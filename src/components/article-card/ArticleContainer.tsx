import { getArticlesMetadata } from "@/src/application/article.service";
import styles from './articles.module.scss'
import { ArticleCard } from "./ArticleCard";

 
export async function  ArticleContainer (){
  
  const articlesMetadata = await getArticlesMetadata()
  
  return ( 
    <section className={styles.blogPageContainer }>
    {articlesMetadata.map((metadata) => {
      return (
        <ArticleCard key={metadata.title} metadata={metadata}></ArticleCard>
      )
    })}
    </section>
    );
}
