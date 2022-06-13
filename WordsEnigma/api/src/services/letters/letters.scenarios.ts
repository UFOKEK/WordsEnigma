import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LetterCreateArgs>({
  letter: {
    one: {
      data: {
        letter: 'String',
        createdAt: '2022-07-05T23:41:32Z',
        modifiedAt: '2022-07-05T23:41:32Z',
        tryRow: {
          create: {
            correct: true,
            updatedAt: '2022-07-05T23:41:32Z',
            game: {
              create: {
                name: 'String',
                startedAt: '2022-07-05T23:41:32Z',
                correct: true,
                duration: 9770944,
                updatedAt: '2022-07-05T23:41:32Z',
                user: {
                  create: {
                    username: 'String9371451',
                    email: 'String1385091',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2022-07-05T23:41:32Z',
                    userSetting: {
                      create: {
                        updatedAt: '2022-07-05T23:41:32Z',
                        Language: {
                          create: {
                            name: 'String',
                            code: 'String4456661',
                            updatedAt: '2022-07-05T23:41:32Z',
                          },
                        },
                      },
                    },
                  },
                },
                word: {
                  create: {
                    word: 'String9860349',
                    size: 3285798,
                    source: 'String',
                    updatedAt: '2022-07-05T23:41:32Z',
                    Language: {
                      create: {
                        name: 'String',
                        code: 'String5556841',
                        updatedAt: '2022-07-05T23:41:32Z',
                      },
                    },
                  },
                },
                wordsBank: {
                  create: {
                    name: 'String8483236',
                    updatedAt: '2022-07-05T23:41:32Z',
                    Language: {
                      create: {
                        name: 'String',
                        code: 'String2217269',
                        updatedAt: '2022-07-05T23:41:32Z',
                      },
                    },
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
        letter: 'String',
        createdAt: '2022-07-05T23:41:32Z',
        modifiedAt: '2022-07-05T23:41:32Z',
        tryRow: {
          create: {
            correct: true,
            updatedAt: '2022-07-05T23:41:32Z',
            game: {
              create: {
                name: 'String',
                startedAt: '2022-07-05T23:41:32Z',
                correct: true,
                duration: 715426,
                updatedAt: '2022-07-05T23:41:32Z',
                user: {
                  create: {
                    username: 'String842827',
                    email: 'String5041810',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2022-07-05T23:41:32Z',
                    userSetting: {
                      create: {
                        updatedAt: '2022-07-05T23:41:32Z',
                        Language: {
                          create: {
                            name: 'String',
                            code: 'String9826638',
                            updatedAt: '2022-07-05T23:41:32Z',
                          },
                        },
                      },
                    },
                  },
                },
                word: {
                  create: {
                    word: 'String9084817',
                    size: 2830584,
                    source: 'String',
                    updatedAt: '2022-07-05T23:41:32Z',
                    Language: {
                      create: {
                        name: 'String',
                        code: 'String7214929',
                        updatedAt: '2022-07-05T23:41:32Z',
                      },
                    },
                  },
                },
                wordsBank: {
                  create: {
                    name: 'String7069418',
                    updatedAt: '2022-07-05T23:41:32Z',
                    Language: {
                      create: {
                        name: 'String',
                        code: 'String5593617',
                        updatedAt: '2022-07-05T23:41:32Z',
                      },
                    },
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
