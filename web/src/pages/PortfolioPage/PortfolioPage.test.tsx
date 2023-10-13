import { render } from '@redwoodjs/testing/web'

import PortfolioPage from './PortfolioPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PortfolioPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PortfolioPage />)
    }).not.toThrow()
  })
})
