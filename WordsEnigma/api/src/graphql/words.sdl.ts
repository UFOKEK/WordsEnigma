export const schema = gql`
  type Word {
    id: String!
    word: String!
    definition: String
    example: String
    synonym: String
    size: Int!
    source: [String]!
    Language: Language!
    languageId: String!
    Game: [Game]!
    createdAt: DateTime!
    updatedAt: DateTime!
    WordBank: WordBank
    wordBankId: String
  }

  type Query {
    words: [Word!]! @requireAuth
    word(id: String!): Word @requireAuth
  }

  input CreateWordInput {
    word: String!
    definition: String
    example: String
    synonym: String
    size: Int!
    source: [String]!
    languageId: String!
    wordBankId: String
  }

  input UpdateWordInput {
    word: String
    definition: String
    example: String
    synonym: String
    size: Int
    source: [String]!
    languageId: String
    wordBankId: String
  }

  type Mutation {
    createWord(input: CreateWordInput!): Word! @requireAuth
    updateWord(id: String!, input: UpdateWordInput!): Word! @requireAuth
    deleteWord(id: String!): Word! @requireAuth
  }
`
