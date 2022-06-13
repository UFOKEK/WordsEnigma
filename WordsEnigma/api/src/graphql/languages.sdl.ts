export const schema = gql`
  type Language {
    id: String!
    name: String!
    code: String!
    UserSettings: [UserSetting]!
    Word: [Word]!
    WordBank: [WordBank]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    languages: [Language!]! @requireAuth
    language(id: String!): Language @requireAuth
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
    updateLanguage(id: String!, input: UpdateLanguageInput!): Language!
      @requireAuth
    deleteLanguage(id: String!): Language! @requireAuth
  }
`
