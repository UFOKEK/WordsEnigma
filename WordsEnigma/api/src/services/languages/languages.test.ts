import {
  languages,
  language,
  createLanguage,
  updateLanguage,
  deleteLanguage,
} from './languages'
import type { StandardScenario } from './languages.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('languages', () => {
  scenario('returns all languages', async (scenario: StandardScenario) => {
    const result = await languages()

    expect(result.length).toEqual(Object.keys(scenario.language).length)
  })

  scenario('returns a single language', async (scenario: StandardScenario) => {
    const result = await language({ id: scenario.language.one.id })

    expect(result).toEqual(scenario.language.one)
  })

  scenario('creates a language', async () => {
    const result = await createLanguage({
      input: {
        name: 'String',
        code: 'String9372804',
        updatedAt: '2022-07-05T17:39:28Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.code).toEqual('String9372804')
    expect(result.updatedAt).toEqual('2022-07-05T17:39:28Z')
  })

  scenario('updates a language', async (scenario: StandardScenario) => {
    const original = await language({ id: scenario.language.one.id })
    const result = await updateLanguage({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a language', async (scenario: StandardScenario) => {
    const original = await deleteLanguage({ id: scenario.language.one.id })
    const result = await language({ id: original.id })

    expect(result).toEqual(null)
  })
})
