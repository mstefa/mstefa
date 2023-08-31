import React from 'react'
import BlogNavBar from '@/src/components/blogNavBar/BlogNavBar';
import BlogHeader from '@/src/components/blog-header/BlogHeader';
import { ArticleContainer } from '@/src/components/article-card/ArticleContainer';

export default async function ListOfBlogsPage() {
  return (
    <React.Fragment>
      <BlogNavBar></BlogNavBar>
      <BlogHeader></BlogHeader>
      <ArticleContainer></ArticleContainer>
    </React.Fragment>
  )
}


