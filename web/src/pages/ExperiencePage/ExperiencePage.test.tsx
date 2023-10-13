import { render } from '@redwoodjs/testing/web'

import ExperiencePage from './ExperiencePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ExperiencePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExperiencePage />)
    }).not.toThrow()
  })
})
