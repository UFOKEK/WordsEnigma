export const schema = gql`
  type Language {
    id: Int!
    name: String!
    code: String!
    UserSettings: [UserSettings]!
    Word: [Word]!
    WordBank: [WordBank]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    languages: [Language!]! @requireAuth
    language(id: Int!): Language @requireAuth
  }

  input CreateLanguageInput {
    name: String!
    code: String!
  }

  input UpdateLanguageInput {
    name: String
    code: String
  }

  type Mutation {
    createLanguage(input: CreateLanguageInput!): Language! @requireAuth
    updateLanguage(id: Int!, input: UpdateLanguageInput!): Language!
      @requireAuth
    deleteLanguage(id: Int!): Language! @requireAuth
  }
`
