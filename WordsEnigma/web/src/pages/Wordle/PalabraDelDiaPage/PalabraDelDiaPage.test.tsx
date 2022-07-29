import { render } from '@redwoodjs/testing/web'

import PalabraDelDiaPage from './PalabraDelDiaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PalabraDelDiaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PalabraDelDiaPage />)
    }).not.toThrow()
  })
})
