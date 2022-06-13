export const schema = gql`
  type UserSetting {
    id: String!
    bio: String
    theme: String
    Language: Language!
    User: [User]!
    languageId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    userSettings: [UserSetting!]! @requireAuth
    userSetting(id: String!): UserSetting @requireAuth
  }

  input CreateUserSettingInput {
    bio: String
    theme: String
    languageId: String!
  }

  input UpdateUserSettingInput {
    bio: String
    theme: String
    languageId: String
  }

  type Mutation {
    createUserSetting(input: CreateUserSettingInput!): UserSetting! @requireAuth
    updateUserSetting(
      id: String!
      input: UpdateUserSettingInput!
    ): UserSetting! @requireAuth
    deleteUserSetting(id: String!): UserSetting! @requireAuth
  }
`
