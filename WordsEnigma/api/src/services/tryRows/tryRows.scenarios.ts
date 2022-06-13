import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TryRowCreateArgs>({
  tryRow: {
    one: {
      data: {
        correct: true,
        updatedAt: '2022-07-05T23:41:46Z',
        game: {
          create: {
            name: 'String',
            startedAt: '2022-07-05T23:41:46Z',
            correct: true,
            duration: 859707,
            updatedAt: '2022-07-05T23:41:46Z',
            user: {
              create: {
                username: 'String6882083',
                email: 'String1051092',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2022-07-05T23:41:46Z',
                userSetting: {
                  create: {
                    updatedAt: '2022-07-05T23:41:46Z',
                    Language: {
                      create: {
                        name: 'String',
                        code: 'String8999275',
                        updatedAt: '2022-07-05T23:41:46Z',
                      },
                    },
                  },
                },
              },
            },
            word: {
              create: {
                word: 'String4496406',
                size: 4617978,
                source: 'String',
                updatedAt: '2022-07-05T23:41:46Z',
                Language: {
                  create: {
                    name: 'String',
                    code: 'String8328220',
                    updatedAt: '2022-07-05T23:41:46Z',
                  },
                },
              },
            },
            wordsBank: {
              create: {
                name: 'String3259119',
                updatedAt: '2022-07-05T23:41:46Z',
                Language: {
                  create: {
                    name: 'String',
                    code: 'String9743449',
                    updatedAt: '2022-07-05T23:41:46Z',
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
        correct: true,
        updatedAt: '2022-07-05T23:41:46Z',
        game: {
          create: {
            name: 'String',
            startedAt: '2022-07-05T23:41:46Z',
            correct: true,
            duration: 3403028,
            updatedAt: '2022-07-05T23:41:46Z',
            user: {
              create: {
                username: 'String9901147',
                email: 'String2287038',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2022-07-05T23:41:46Z',
                userSetting: {
                  create: {
                    updatedAt: '2022-07-05T23:41:46Z',
                    Language: {
                      create: {
                        name: 'String',
                        code: 'String8406440',
                        updatedAt: '2022-07-05T23:41:46Z',
                      },
                    },
                  },
                },
              },
            },
            word: {
              create: {
                word: 'String5284813',
                size: 5691741,
                source: 'String',
                updatedAt: '2022-07-05T23:41:46Z',
                Language: {
                  create: {
                    name: 'String',
                    code: 'String137251',
                    updatedAt: '2022-07-05T23:41:46Z',
                  },
                },
              },
            },
            wordsBank: {
              create: {
                name: 'String7792161',
                updatedAt: '2022-07-05T23:41:46Z',
                Language: {
                  create: {
                    name: 'String',
                    code: 'String8128588',
                    updatedAt: '2022-07-05T23:41:46Z',
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
