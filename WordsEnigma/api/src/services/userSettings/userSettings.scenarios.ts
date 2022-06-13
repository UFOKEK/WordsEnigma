import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserSettingCreateArgs>({
  userSetting: {
    one: {
      data: {
        updatedAt: '2022-07-05T23:40:22Z',
        Language: {
          create: {
            name: 'String',
            code: 'String7064109',
            updatedAt: '2022-07-05T23:40:22Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-07-05T23:40:22Z',
        Language: {
          create: {
            name: 'String',
            code: 'String3468039',
            updatedAt: '2022-07-05T23:40:22Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
