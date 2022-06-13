import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WordBankCreateArgs>({
  wordBank: {
    one: {
      data: {
        name: 'String8498064',
        updatedAt: '2022-07-05T23:41:06Z',
        Language: {
          create: {
            name: 'String',
            code: 'String8180276',
            updatedAt: '2022-07-05T23:41:06Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String7670115',
        updatedAt: '2022-07-05T23:41:06Z',
        Language: {
          create: {
            name: 'String',
            code: 'String8263895',
            updatedAt: '2022-07-05T23:41:06Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
