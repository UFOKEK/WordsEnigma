import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StatisticCreateArgs>({
  statistic: {
    one: {
      data: {
        updatedAt: '2022-07-05T23:42:00Z',
        user: {
          create: {
            username: 'String1160558',
            email: 'String3089239',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T23:42:00Z',
            userSetting: {
              create: {
                updatedAt: '2022-07-05T23:42:00Z',
                Language: {
                  create: {
                    name: 'String',
                    code: 'String7317556',
                    updatedAt: '2022-07-05T23:42:00Z',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-07-05T23:42:00Z',
        user: {
          create: {
            username: 'String8611553',
            email: 'String6541396',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T23:42:00Z',
            userSetting: {
              create: {
                updatedAt: '2022-07-05T23:42:00Z',
                Language: {
                  create: {
                    name: 'String',
                    code: 'String5947696',
                    updatedAt: '2022-07-05T23:42:00Z',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
