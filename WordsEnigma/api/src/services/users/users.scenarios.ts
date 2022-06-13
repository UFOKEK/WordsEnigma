import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        username: 'String9664203',
        email: 'String5256980',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2022-07-05T23:43:34Z',
        userSetting: {
          create: {
            updatedAt: '2022-07-05T23:43:34Z',
            Language: {
              create: {
                name: 'String',
                code: 'String8539516',
                updatedAt: '2022-07-05T23:43:34Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        username: 'String4565619',
        email: 'String1964854',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2022-07-05T23:43:34Z',
        userSetting: {
          create: {
            updatedAt: '2022-07-05T23:43:34Z',
            Language: {
              create: {
                name: 'String',
                code: 'String7428657',
                updatedAt: '2022-07-05T23:43:34Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
