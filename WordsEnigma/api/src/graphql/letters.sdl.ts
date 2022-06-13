export const schema = gql`
  type Letter {
    id: String!
    letter: String!
    tryRow: TryRow!
    tryRowId: String!
    createdAt: DateTime!
    modifiedAt: DateTime!
  }

  type Query {
    letters: [Letter!]! @requireAuth
    letter(id: String!): Letter @requireAuth
  }

  input CreateLetterInput {
    letter: String!
    tryRowId: String!
    modifiedAt: DateTime!
  }

  input UpdateLetterInput {
    letter: String
    tryRowId: String
    modifiedAt: DateTime
  }

  type Mutation {
    createLetter(input: CreateLetterInput!): Letter! @requireAuth
    updateLetter(id: String!, input: UpdateLetterInput!): Letter! @requireAuth
    deleteLetter(id: String!): Letter! @requireAuth
  }
`
