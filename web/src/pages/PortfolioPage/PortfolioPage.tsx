import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PortfolioPage = () => {
  return (
    <>
      <MetaTags title="Portfolio" description="Portfolio page" />

      <h1>PortfolioPage</h1>
      <p>
        Find me in <code>./web/src/pages/PortfolioPage/PortfolioPage.tsx</code>
      </p>
      <p>
        My default route is named <code>portfolio</code>, link to me with `
        <Link to={routes.portfolio()}>Portfolio</Link>`
      </p>
    </>
  )
}

export default PortfolioPage
