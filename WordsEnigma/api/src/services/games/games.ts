import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  GameResolvers,
} from 'types/graphql'

export const games: QueryResolvers['games'] = () => {
  return db.game.findMany()
}

export const game: QueryResolvers['game'] = ({ id }) => {
  return db.game.findUnique({
    where: { id },
  })
}

export const createGame: MutationResolvers['createGame'] = ({ input }) => {
  return db.game.create({
    data: input,
  })
}

export const updateGame: MutationResolvers['updateGame'] = ({ id, input }) => {
  return db.game.update({
    data: input,
    where: { id },
  })
}

export const deleteGame: MutationResolvers['deleteGame'] = ({ id }) => {
  return db.game.delete({
    where: { id },
  })
}

export const Game: GameResolvers = {
  user: (_obj, { root }) =>
    db.game.findUnique({ where: { id: root.id } }).user(),
  word: (_obj, { root }) =>
    db.game.findUnique({ where: { id: root.id } }).word(),
  wordsBank: (_obj, { root }) =>
    db.game.findUnique({ where: { id: root.id } }).wordsBank(),
  tryRows: (_obj, { root }) =>
    db.game.findUnique({ where: { id: root.id } }).tryRows(),
  statistics: (_obj, { root }) =>
    db.game.findUnique({ where: { id: root.id } }).statistics(),
}
