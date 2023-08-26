import React from 'react'
import { getArticlesMetadata } from '@/src/application/article.service'
import NavBar from '@/src/components/navBar/NavBar';
import styles from './page.module.scss'
import { ArticleCard } from '@/src/components/article-card/ArticleCard';

export default async function ListOfBlogsPage() {
  const articlesMetadata = await getArticlesMetadata()
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <section className={styles.blogPageContainer }>
      <h1>Matías´s Blog</h1>
      <h2>Please excuse the mess 🧹 </h2>
      <p>🚧👷‍♂️ This blog is under construction 👷‍♀️🚧</p>
      <p>In the meantime, feel free to browse around 👀</p>
      {articlesMetadata.map((metadata) => {
        return (
          <ArticleCard key={metadata.title} metadata={metadata}></ArticleCard>
        )
      })}
      </section>
    </React.Fragment>
  )
}


