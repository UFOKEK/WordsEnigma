import {
  statistics,
  statistic,
  createStatistic,
  updateStatistic,
  deleteStatistic,
} from './statistics'
import type { StandardScenario } from './statistics.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('statistics', () => {
  scenario('returns all statistics', async (scenario: StandardScenario) => {
    const result = await statistics()

    expect(result.length).toEqual(Object.keys(scenario.statistic).length)
  })

  scenario('returns a single statistic', async (scenario: StandardScenario) => {
    const result = await statistic({ id: scenario.statistic.one.id })

    expect(result).toEqual(scenario.statistic.one)
  })

  scenario('creates a statistic', async () => {
    const result = await createStatistic({
      input: { updatedAt: '2022-07-05T23:41:59Z' },
    })

    expect(result.updatedAt).toEqual('2022-07-05T23:41:59Z')
  })

  scenario('updates a statistic', async (scenario: StandardScenario) => {
    const original = await statistic({ id: scenario.statistic.one.id })
    const result = await updateStatistic({
      id: original.id,
      input: { updatedAt: '2022-07-06T23:41:59Z' },
    })

    expect(result.updatedAt).toEqual('2022-07-06T23:41:59Z')
  })

  scenario('deletes a statistic', async (scenario: StandardScenario) => {
    const original = await deleteStatistic({ id: scenario.statistic.one.id })
    const result = await statistic({ id: original.id })

    expect(result).toEqual(null)
  })
})
