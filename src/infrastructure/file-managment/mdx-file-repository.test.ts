import { describe, it, expect } from 'vitest'
import { getSlug, getArticleFromSlug } from './mdx-file-repository'

describe('mdx-file-repository', () => {
  it('should retrieve slugs for all mdx articles', () => {
    const slugs = getSlug()
    expect(slugs).toBeInstanceOf(Array)
    expect(slugs).toContain('an_example')
    expect(slugs).toContain('ejemplo')
    expect(slugs).toContain('solid')
  })

  it('should load and serialize a valid article by slug', async () => {
    const article = await getArticleFromSlug('an_example')
    expect(article).not.toBeNull()
    expect(article?.frontmatter).toBeDefined()
    expect(article?.frontmatter.title).toBeDefined()
    expect(article?.compiledSource).toBeDefined()
  })

  it('should return null for a non-existent slug', async () => {
    const article = await getArticleFromSlug('non-existent-article-slug')
    expect(article).toBeNull()
  })
})
