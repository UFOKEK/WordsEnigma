export const schema = gql`
  type Game {
    id: String!
    name: String!
    tries: Int!
    startedAt: DateTime!
    finishedAt: DateTime
    correct: Boolean!
    duration: Int!
    user: User!
    userId: String!
    word: Word!
    wordId: String!
    wordsBank: WordBank!
    wordsBankId: String!
    tryRows: [TryRow]!
    statistics: Statistic
    statisticsId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    games: [Game!]! @requireAuth
    game(id: String!): Game @requireAuth
  }

  input CreateGameInput {
    name: String!
    tries: Int!
    startedAt: DateTime!
    finishedAt: DateTime
    correct: Boolean!
    duration: Int!
    userId: String!
    wordId: String!
    wordsBankId: String!
    statisticsId: String!
  }

  input UpdateGameInput {
    name: String
    tries: Int
    startedAt: DateTime
    finishedAt: DateTime
    correct: Boolean
    duration: Int
    userId: String
    wordId: String
    wordsBankId: String
    statisticsId: String
  }

  type Mutation {
    createGame(input: CreateGameInput!): Game! @requireAuth
    updateGame(id: String!, input: UpdateGameInput!): Game! @requireAuth
    deleteGame(id: String!): Game! @requireAuth
  }
`
