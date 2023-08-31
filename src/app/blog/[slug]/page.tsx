import { getSlug } from "@/src/infrastructure/file-managment/mdx-file-repository";
import React from "react";
import { MdxContent } from "./MdxContent";
import { getArticleBySlug } from "@/src/application/article.service";
import styles from "./slug.module.scss";
import BlogNavBar from "@/src/components/blogNavBar/BlogNavBar";

export default async function BlogsPage({ params }: any) {
  const article = await getArticle(params.slug);

  if (article === null) {
    return <h1>NOT FOUND</h1>;
  }

  const { metadata, serialized } = article!;

  return (
    <>
      <BlogNavBar></BlogNavBar>

      <div className={styles.blogPageContainer}>
        <div className={styles.articleHeader}>
          <h1>{metadata.title} </h1>
          <p className={styles.date}>
            {metadata.publishedAt} &mdash; {metadata.readTime}
          </p>
        </div>
        <div className="content">
          <MdxContent source={serialized} />
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = getSlug();
  return slugs.map((e) => {
    return { slug: e };
  });
}

async function getArticle(slug: string) {
  return getArticleBySlug(slug);
}
