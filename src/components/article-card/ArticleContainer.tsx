import styles from "./articles.module.scss";
import { ArticleCard } from "./ArticleCard";

export function ArticleContainer({
  articlesMetadata,
}: {
  articlesMetadata: any[];
}) {
  return (
    <section className={styles.blogPageContainer}>
      {articlesMetadata.map((metadata) => (
        <ArticleCard key={metadata.title} metadata={metadata} />
      ))}
    </section>
  );
}
