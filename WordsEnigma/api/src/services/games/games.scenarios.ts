import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GameCreateArgs>({
  game: {
    one: {
      data: {
        name: 'String',
        startedAt: '2022-07-05T23:41:17Z',
        correct: true,
        duration: 9295972,
        updatedAt: '2022-07-05T23:41:17Z',
        user: {
          create: {
            username: 'String6190276',
            email: 'String8640090',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T23:41:17Z',
            userSetting: {
              create: {
                updatedAt: '2022-07-05T23:41:17Z',
                Language: {
                  create: {
                    name: 'String',
                    code: 'String3161265',
                    updatedAt: '2022-07-05T23:41:17Z',
                  },
                },
              },
            },
          },
        },
        word: {
          create: {
            word: 'String971036',
            size: 5598352,
            source: 'String',
            updatedAt: '2022-07-05T23:41:17Z',
            Language: {
              create: {
                name: 'String',
                code: 'String1009969',
                updatedAt: '2022-07-05T23:41:17Z',
              },
            },
          },
        },
        wordsBank: {
          create: {
            name: 'String1629470',
            updatedAt: '2022-07-05T23:41:17Z',
            Language: {
              create: {
                name: 'String',
                code: 'String4952152',
                updatedAt: '2022-07-05T23:41:17Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        startedAt: '2022-07-05T23:41:17Z',
        correct: true,
        duration: 8986327,
        updatedAt: '2022-07-05T23:41:17Z',
        user: {
          create: {
            username: 'String4472067',
            email: 'String1078383',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T23:41:17Z',
            userSetting: {
              create: {
                updatedAt: '2022-07-05T23:41:17Z',
                Language: {
                  create: {
                    name: 'String',
                    code: 'String6505038',
                    updatedAt: '2022-07-05T23:41:17Z',
                  },
                },
              },
            },
          },
        },
        word: {
          create: {
            word: 'String549318',
            size: 7076743,
            source: 'String',
            updatedAt: '2022-07-05T23:41:17Z',
            Language: {
              create: {
                name: 'String',
                code: 'String5222058',
                updatedAt: '2022-07-05T23:41:17Z',
              },
            },
          },
        },
        wordsBank: {
          create: {
            name: 'String6849058',
            updatedAt: '2022-07-05T23:41:17Z',
            Language: {
              create: {
                name: 'String',
                code: 'String3366233',
                updatedAt: '2022-07-05T23:41:17Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
