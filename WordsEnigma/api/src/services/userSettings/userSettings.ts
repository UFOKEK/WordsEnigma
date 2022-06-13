import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  UserSettingResolvers,
} from 'types/graphql'

export const userSettings: QueryResolvers['userSettings'] = () => {
  return db.userSetting.findMany()
}

export const userSetting: QueryResolvers['userSetting'] = ({ id }) => {
  return db.userSetting.findUnique({
    where: { id },
  })
}

export const createUserSetting: MutationResolvers['createUserSetting'] = ({
  input,
}) => {
  return db.userSetting.create({
    data: input,
  })
}

export const updateUserSetting: MutationResolvers['updateUserSetting'] = ({
  id,
  input,
}) => {
  return db.userSetting.update({
    data: input,
    where: { id },
  })
}

export const deleteUserSetting: MutationResolvers['deleteUserSetting'] = ({
  id,
}) => {
  return db.userSetting.delete({
    where: { id },
  })
}

export const UserSetting: UserSettingResolvers = {
  Language: (_obj, { root }) =>
    db.userSetting.findUnique({ where: { id: root.id } }).Language(),
  User: (_obj, { root }) =>
    db.userSetting.findUnique({ where: { id: root.id } }).User(),
}
