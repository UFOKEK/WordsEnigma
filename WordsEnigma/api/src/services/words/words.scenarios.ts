import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WordCreateArgs>({
  word: {
    one: {
      data: {
        word: 'String2616908',
        size: 836638,
        source: 'String',
        updatedAt: '2022-07-05T23:40:54Z',
        Language: {
          create: {
            name: 'String',
            code: 'String7286670',
            updatedAt: '2022-07-05T23:40:54Z',
          },
        },
      },
    },
    two: {
      data: {
        word: 'String3512972',
        size: 7859454,
        source: 'String',
        updatedAt: '2022-07-05T23:40:54Z',
        Language: {
          create: {
            name: 'String',
            code: 'String1805532',
            updatedAt: '2022-07-05T23:40:54Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
