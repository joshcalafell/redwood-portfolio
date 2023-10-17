import type { Article } from '@prisma/client'

import {
  articles,
  article,
  createArticle,
  updateArticle,
  deleteArticle,
} from './articles'
import type { StandardScenario } from './articles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('articles', () => {
  scenario('returns all articles', async (scenario: StandardScenario) => {
    const result = await articles()

    expect(result.length).toEqual(Object.keys(scenario.article).length)
  })

  scenario('returns a single article', async (scenario: StandardScenario) => {
    const result = await article({ id: scenario.article.one.id })

    expect(result).toEqual(scenario.article.one)
  })

  scenario('creates a article', async () => {
    const result = await createArticle({
      input: { title: 'String', body: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a article', async (scenario: StandardScenario) => {
    const original = (await article({ id: scenario.article.one.id })) as Article
    const result = await updateArticle({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a article', async (scenario: StandardScenario) => {
    const original = (await deleteArticle({
      id: scenario.article.one.id,
    })) as Article
    const result = await article({ id: original.id })

    expect(result).toEqual(null)
  })
})
