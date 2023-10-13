import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ExperiencePage = () => {
  return (
    <>
      <MetaTags title="Experience" description="Experience page" />

      <h1>ExperiencePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ExperiencePage/ExperiencePage.tsx</code>
      </p>
      <p>
        My default route is named <code>experience</code>, link to me with `
        <Link to={routes.experience()}>Experience</Link>`
      </p>
    </>
  )
}

export default ExperiencePage
