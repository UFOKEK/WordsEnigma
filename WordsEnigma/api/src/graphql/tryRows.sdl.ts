export const schema = gql`
  type TryRow {
    id: String!
    game: Game!
    gameId: String!
    tries: Int!
    rowSize: Int!
    correct: Boolean!
    letters: [Letter]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    tryRows: [TryRow!]! @requireAuth
    tryRow(id: String!): TryRow @requireAuth
  }

  input CreateTryRowInput {
    gameId: String!
    tries: Int!
    rowSize: Int!
    correct: Boolean!
  }

  input UpdateTryRowInput {
    gameId: String
    tries: Int
    rowSize: Int
    correct: Boolean
  }

  type Mutation {
    createTryRow(input: CreateTryRowInput!): TryRow! @requireAuth
    updateTryRow(id: String!, input: UpdateTryRowInput!): TryRow! @requireAuth
    deleteTryRow(id: String!): TryRow! @requireAuth
  }
`
