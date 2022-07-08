export const schema = gql`
  type WordBank {
    id: String!
    name: String!
    Language: Language!
    languageId: String!
    Word: [Word]!
    Game: [Game]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    wordBanks: [WordBank!]! @requireAuth
    wordBank(id: String!): WordBank! @skipAuth
    findWordBankByName(name: String!): WordBank! @skipAuth
  }

  input CreateWordBankInput {
    name: String!
    languageId: String!
  }

  input UpdateWordBankInput {
    name: String
    languageId: String
  }

  type Mutation {
    createWordBank(input: CreateWordBankInput!): WordBank! @requireAuth
    updateWordBank(id: String!, input: UpdateWordBankInput!): WordBank! @requireAuth
    deleteWordBank(id: String!): WordBank! @requireAuth
  }
`
