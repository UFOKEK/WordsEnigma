export const schema = gql`
  type Statistic {
    id: String!
    gamePlayed: Int!
    gameWon: Int!
    gameLost: Int!
    streak: Int!
    average: Int!
    user: User!
    Game: [Game]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    statistics: [Statistic!]! @requireAuth
    statistic(id: String!): Statistic @requireAuth
  }

  input CreateStatisticInput {
    gamePlayed: Int!
    gameWon: Int!
    gameLost: Int!
    streak: Int!
    average: Int!
  }

  input UpdateStatisticInput {
    gamePlayed: Int
    gameWon: Int
    gameLost: Int
    streak: Int
    average: Int
  }

  type Mutation {
    createStatistic(input: CreateStatisticInput!): Statistic! @requireAuth
    updateStatistic(id: String!, input: UpdateStatisticInput!): Statistic!
      @requireAuth
    deleteStatistic(id: String!): Statistic! @requireAuth
  }
`
