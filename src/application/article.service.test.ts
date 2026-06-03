import { describe, it, expect } from 'vitest'
import { getArticleBySlug, getArticlesMetadata } from './article.service'

describe('article.service', () => {
  it('should get article metadata and serialized source by slug', async () => {
    const article = await getArticleBySlug('an_example')
    expect(article).not.toBeNull()
    expect(article?.metadata).toBeDefined()
    expect(article?.metadata.slug).toBe('an_example')
    expect(article?.metadata.title).toBeDefined()
    expect(article?.metadata.readTime).toContain('min read')
    expect(article?.metadata.publishedAt).toBeDefined()
    expect(article?.serialized).toBeDefined()
  })

  it('should return null for invalid slug', async () => {
    const article = await getArticleBySlug('invalid-slug')
    expect(article).toBeNull()
  })

  it('should return all articles metadata sorted by publication date descending', async () => {
    const articles = await getArticlesMetadata()
    expect(articles).toBeInstanceOf(Array)
    expect(articles.length).toBeGreaterThan(0)
    
    // Check sorting (descending)
    for (let i = 1; i < articles.length; i++) {
      const prevDate = new Date(articles[i - 1].publishedAt)
      const currDate = new Date(articles[i].publishedAt)
      // Since formatted date is "D MMMM YYYY", we can check sorting via date objects
      expect(prevDate.getTime()).toBeGreaterThanOrEqual(currDate.getTime())
    }
  })
})
