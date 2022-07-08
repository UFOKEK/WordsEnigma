import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WordCreateArgs>({
  word: {
    one: {
      data: {
        word: 'String4436754',
        size: 1256503,
        source: 'String',
        updatedAt: '2022-07-08T19:56:39Z',
        Language: {
          create: {
            name: 'String',
            code: 'String6448514',
            updatedAt: '2022-07-08T19:56:39Z',
          },
        },
      },
    },
    two: {
      data: {
        word: 'String4368268',
        size: 1329344,
        source: 'String',
        updatedAt: '2022-07-08T19:56:39Z',
        Language: {
          create: {
            name: 'String',
            code: 'String268326',
            updatedAt: '2022-07-08T19:56:39Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
