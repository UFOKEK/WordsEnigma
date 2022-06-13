import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LanguageCreateArgs>({
  language: {
    one: {
      data: {
        name: 'String',
        code: 'String5529454',
        updatedAt: '2022-07-05T23:40:41Z',
      },
    },
    two: {
      data: {
        name: 'String',
        code: 'String4047400',
        updatedAt: '2022-07-05T23:40:41Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
