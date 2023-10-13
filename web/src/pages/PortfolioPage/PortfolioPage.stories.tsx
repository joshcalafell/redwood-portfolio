import type { Meta, StoryObj } from '@storybook/react'

import PortfolioPage from './PortfolioPage'

const meta: Meta<typeof PortfolioPage> = {
  component: PortfolioPage,
}

export default meta

type Story = StoryObj<typeof PortfolioPage>

export const Primary: Story = {}
