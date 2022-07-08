import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  WordBankResolvers,
} from 'types/graphql'

export const wordBanks: QueryResolvers['wordBanks'] = () => {
  return db.wordBank.findMany()
}

export const wordBank: QueryResolvers['wordBank'] = ({ id }) => {
  return db.wordBank.findUnique({
    where: { id },
  })
}

export const findWordBankbyName: QueryResolvers['findWordBankByName'] = ({ name }) => {
  return db.wordBank.findUnique({
    where: { 
      name: name
     },
  })
}

export const createWordBank: MutationResolvers['createWordBank'] = ({
  input,
}) => {
  return db.wordBank.create({
    data: input,
  })
}

export const updateWordBank: MutationResolvers['updateWordBank'] = ({
  id,
  input,
}) => {
  return db.wordBank.update({
    data: input,
    where: { id },
  })
}

export const deleteWordBank: MutationResolvers['deleteWordBank'] = ({ id }) => {
  return db.wordBank.delete({
    where: { id },
  })
}

export const WordBank: WordBankResolvers = {
  Language: (_obj, { root }) =>
    db.wordBank.findUnique({ where: { id: root.id } }).Language(),
  Word: (_obj, { root }) =>
    db.wordBank.findUnique({ where: { id: root.id } }).Word(),
  Game: (_obj, { root }) =>
    db.wordBank.findUnique({ where: { id: root.id } }).Game(),
}
