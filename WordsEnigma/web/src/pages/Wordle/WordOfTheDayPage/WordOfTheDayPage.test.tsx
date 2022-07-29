import { render } from '@redwoodjs/testing/web'

import WordOfTheDay from './WordOfTheDayPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WordOfTheDayPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MotduJourPage />)
    }).not.toThrow()
  })
})
