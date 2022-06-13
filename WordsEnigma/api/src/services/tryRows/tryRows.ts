import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  TryRowResolvers,
} from 'types/graphql'

export const tryRows: QueryResolvers['tryRows'] = () => {
  return db.tryRow.findMany()
}

export const tryRow: QueryResolvers['tryRow'] = ({ id }) => {
  return db.tryRow.findUnique({
    where: { id },
  })
}

export const createTryRow: MutationResolvers['createTryRow'] = ({ input }) => {
  return db.tryRow.create({
    data: input,
  })
}

export const updateTryRow: MutationResolvers['updateTryRow'] = ({
  id,
  input,
}) => {
  return db.tryRow.update({
    data: input,
    where: { id },
  })
}

export const deleteTryRow: MutationResolvers['deleteTryRow'] = ({ id }) => {
  return db.tryRow.delete({
    where: { id },
  })
}

export const TryRow: TryRowResolvers = {
  game: (_obj, { root }) =>
    db.tryRow.findUnique({ where: { id: root.id } }).game(),
  letters: (_obj, { root }) =>
    db.tryRow.findUnique({ where: { id: root.id } }).letters(),
}
