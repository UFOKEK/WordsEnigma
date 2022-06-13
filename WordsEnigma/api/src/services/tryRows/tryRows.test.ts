import {
  tryRows,
  tryRow,
  createTryRow,
  updateTryRow,
  deleteTryRow,
} from './tryRows'
import type { StandardScenario } from './tryRows.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tryRows', () => {
  scenario('returns all tryRows', async (scenario: StandardScenario) => {
    const result = await tryRows()

    expect(result.length).toEqual(Object.keys(scenario.tryRow).length)
  })

  scenario('returns a single tryRow', async (scenario: StandardScenario) => {
    const result = await tryRow({ id: scenario.tryRow.one.id })

    expect(result).toEqual(scenario.tryRow.one)
  })

  scenario('creates a tryRow', async (scenario: StandardScenario) => {
    const result = await createTryRow({
      input: {
        gameId: scenario.tryRow.two.gameId,
        correct: true,
        updatedAt: '2022-07-05T23:41:46Z',
      },
    })

    expect(result.gameId).toEqual(scenario.tryRow.two.gameId)
    expect(result.correct).toEqual(true)
    expect(result.updatedAt).toEqual('2022-07-05T23:41:46Z')
  })

  scenario('updates a tryRow', async (scenario: StandardScenario) => {
    const original = await tryRow({ id: scenario.tryRow.one.id })
    const result = await updateTryRow({
      id: original.id,
      input: { correct: false },
    })

    expect(result.correct).toEqual(false)
  })

  scenario('deletes a tryRow', async (scenario: StandardScenario) => {
    const original = await deleteTryRow({ id: scenario.tryRow.one.id })
    const result = await tryRow({ id: original.id })

    expect(result).toEqual(null)
  })
})
