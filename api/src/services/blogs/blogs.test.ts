import type { Blog } from '@prisma/client'

import { blogs, blog, createBlog, updateBlog, deleteBlog } from './blogs'
import type { StandardScenario } from './blogs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('blogs', () => {
  scenario('returns all blogs', async (scenario: StandardScenario) => {
    const result = await blogs()

    expect(result.length).toEqual(Object.keys(scenario.blog).length)
  })

  scenario('returns a single blog', async (scenario: StandardScenario) => {
    const result = await blog({ id: scenario.blog.one.id })

    expect(result).toEqual(scenario.blog.one)
  })

  scenario('creates a blog', async () => {
    const result = await createBlog({
      input: { title: 'String', body: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a blog', async (scenario: StandardScenario) => {
    const original = (await blog({ id: scenario.blog.one.id })) as Blog
    const result = await updateBlog({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a blog', async (scenario: StandardScenario) => {
    const original = (await deleteBlog({ id: scenario.blog.one.id })) as Blog
    const result = await blog({ id: original.id })

    expect(result).toEqual(null)
  })
})
