import { render } from '@redwoodjs/testing/web'

import MotDuJourPhilPage from './MotDuJourPhilPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MotDuJourPhilPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MotDuJourPhilPage />)
    }).not.toThrow()
  })
})
