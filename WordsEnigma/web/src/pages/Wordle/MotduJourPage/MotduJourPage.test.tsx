import { render } from '@redwoodjs/testing/web'

import MotduJourPage from './MotduJourPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MotduJourPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MotduJourPage />)
    }).not.toThrow()
  })
})
