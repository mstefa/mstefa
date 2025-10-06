import React from "react";
import BlogNavBar from "@/src/components/blogNavBar/BlogNavBar";
import BlogHeader from "@/src/components/blog-header/BlogHeader";
import { ArticleContainer } from "@/src/components/article-card/ArticleContainer";
import { getArticlesMetadata } from "@/src/application/article.service";

export default async function ListOfBlogsPage() {
  const articlesMetadata = await getArticlesMetadata();
  return (
    <React.Fragment>
      <BlogNavBar></BlogNavBar>
      <BlogHeader></BlogHeader>
      <ArticleContainer articlesMetadata={articlesMetadata} />
    </React.Fragment>
  );
}
