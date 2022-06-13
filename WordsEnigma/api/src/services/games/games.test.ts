import { games, game, createGame, updateGame, deleteGame } from './games'
import type { StandardScenario } from './games.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('games', () => {
  scenario('returns all games', async (scenario: StandardScenario) => {
    const result = await games()

    expect(result.length).toEqual(Object.keys(scenario.game).length)
  })

  scenario('returns a single game', async (scenario: StandardScenario) => {
    const result = await game({ id: scenario.game.one.id })

    expect(result).toEqual(scenario.game.one)
  })

  scenario('creates a game', async (scenario: StandardScenario) => {
    const result = await createGame({
      input: {
        name: 'String',
        startedAt: '2022-07-05T23:41:17Z',
        correct: true,
        duration: 6267650,
        userId: scenario.game.two.userId,
        wordId: scenario.game.two.wordId,
        wordsBankId: scenario.game.two.wordsBankId,
        statisticsId: scenario.game.two.statisticsId,
        updatedAt: '2022-07-05T23:41:17Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.startedAt).toEqual('2022-07-05T23:41:17Z')
    expect(result.correct).toEqual(true)
    expect(result.duration).toEqual(6267650)
    expect(result.userId).toEqual(scenario.game.two.userId)
    expect(result.wordId).toEqual(scenario.game.two.wordId)
    expect(result.wordsBankId).toEqual(scenario.game.two.wordsBankId)
    expect(result.statisticsId).toEqual(scenario.game.two.statisticsId)
    expect(result.updatedAt).toEqual('2022-07-05T23:41:17Z')
  })

  scenario('updates a game', async (scenario: StandardScenario) => {
    const original = await game({ id: scenario.game.one.id })
    const result = await updateGame({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a game', async (scenario: StandardScenario) => {
    const original = await deleteGame({ id: scenario.game.one.id })
    const result = await game({ id: original.id })

    expect(result).toEqual(null)
  })
})
