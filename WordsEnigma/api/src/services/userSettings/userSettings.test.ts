import {
  userSettings,
  userSetting,
  createUserSetting,
  updateUserSetting,
  deleteUserSetting,
} from './userSettings'
import type { StandardScenario } from './userSettings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userSettings', () => {
  scenario('returns all userSettings', async (scenario: StandardScenario) => {
    const result = await userSettings()

    expect(result.length).toEqual(Object.keys(scenario.userSetting).length)
  })

  scenario(
    'returns a single userSetting',
    async (scenario: StandardScenario) => {
      const result = await userSetting({ id: scenario.userSetting.one.id })

      expect(result).toEqual(scenario.userSetting.one)
    }
  )

  scenario('creates a userSetting', async (scenario: StandardScenario) => {
    const result = await createUserSetting({
      input: {
        languageId: scenario.userSetting.two.languageId,
        updatedAt: '2022-07-05T23:40:22Z',
      },
    })

    expect(result.languageId).toEqual(scenario.userSetting.two.languageId)
    expect(result.updatedAt).toEqual('2022-07-05T23:40:22Z')
  })

  scenario('updates a userSetting', async (scenario: StandardScenario) => {
    const original = await userSetting({ id: scenario.userSetting.one.id })
    const result = await updateUserSetting({
      id: original.id,
      input: { updatedAt: '2022-07-06T23:40:22Z' },
    })

    expect(result.updatedAt).toEqual('2022-07-06T23:40:22Z')
  })

  scenario('deletes a userSetting', async (scenario: StandardScenario) => {
    const original = await deleteUserSetting({
      id: scenario.userSetting.one.id,
    })
    const result = await userSetting({ id: original.id })

    expect(result).toEqual(null)
  })
})
