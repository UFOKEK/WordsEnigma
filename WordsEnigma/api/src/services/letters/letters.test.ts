import {
  letters,
  letter,
  createLetter,
  updateLetter,
  deleteLetter,
} from './letters'
import type { StandardScenario } from './letters.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('letters', () => {
  scenario('returns all letters', async (scenario: StandardScenario) => {
    const result = await letters()

    expect(result.length).toEqual(Object.keys(scenario.letter).length)
  })

  scenario('returns a single letter', async (scenario: StandardScenario) => {
    const result = await letter({ id: scenario.letter.one.id })

    expect(result).toEqual(scenario.letter.one)
  })

  scenario('creates a letter', async (scenario: StandardScenario) => {
    const result = await createLetter({
      input: {
        letter: 'String',
        tryRowId: scenario.letter.two.tryRowId,
        createdAt: '2022-07-05T23:41:32Z',
        modifiedAt: '2022-07-05T23:41:32Z',
      },
    })

    expect(result.letter).toEqual('String')
    expect(result.tryRowId).toEqual(scenario.letter.two.tryRowId)
    expect(result.createdAt).toEqual('2022-07-05T23:41:32Z')
    expect(result.modifiedAt).toEqual('2022-07-05T23:41:32Z')
  })

  scenario('updates a letter', async (scenario: StandardScenario) => {
    const original = await letter({ id: scenario.letter.one.id })
    const result = await updateLetter({
      id: original.id,
      input: { letter: 'String2' },
    })

    expect(result.letter).toEqual('String2')
  })

  scenario('deletes a letter', async (scenario: StandardScenario) => {
    const original = await deleteLetter({ id: scenario.letter.one.id })
    const result = await letter({ id: original.id })

    expect(result).toEqual(null)
  })
})
