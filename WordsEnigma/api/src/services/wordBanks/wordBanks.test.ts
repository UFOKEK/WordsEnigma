import {
  wordBanks,
  wordBank,
  createWordBank,
  updateWordBank,
  deleteWordBank,
} from './wordBanks'
import type { StandardScenario } from './wordBanks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('wordBanks', () => {
  scenario('returns all wordBanks', async (scenario: StandardScenario) => {
    const result = await wordBanks()

    expect(result.length).toEqual(Object.keys(scenario.wordBank).length)
  })

  scenario('returns a single wordBank', async (scenario: StandardScenario) => {
    const result = await wordBank({ id: scenario.wordBank.one.id })

    expect(result).toEqual(scenario.wordBank.one)
  })

  scenario('creates a wordBank', async (scenario: StandardScenario) => {
    const result = await createWordBank({
      input: {
        name: 'String3451618',
        languageId: scenario.wordBank.two.languageId,
        updatedAt: '2022-07-05T17:39:51Z',
      },
    })

    expect(result.name).toEqual('String3451618')
    expect(result.languageId).toEqual(scenario.wordBank.two.languageId)
    expect(result.updatedAt).toEqual('2022-07-05T17:39:51Z')
  })

  scenario('updates a wordBank', async (scenario: StandardScenario) => {
    const original = await wordBank({ id: scenario.wordBank.one.id })
    const result = await updateWordBank({
      id: original.id,
      input: { name: 'String68297072' },
    })

    expect(result.name).toEqual('String68297072')
  })

  scenario('deletes a wordBank', async (scenario: StandardScenario) => {
    const original = await deleteWordBank({ id: scenario.wordBank.one.id })
    const result = await wordBank({ id: original.id })

    expect(result).toEqual(null)
  })
})
