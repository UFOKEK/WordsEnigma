import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  LetterResolvers,
} from 'types/graphql'

export const letters: QueryResolvers['letters'] = () => {
  return db.letter.findMany()
}

export const letter: QueryResolvers['letter'] = ({ id }) => {
  return db.letter.findUnique({
    where: { id },
  })
}

export const createLetter: MutationResolvers['createLetter'] = ({ input }) => {
  return db.letter.create({
    data: input,
  })
}

export const updateLetter: MutationResolvers['updateLetter'] = ({
  id,
  input,
}) => {
  return db.letter.update({
    data: input,
    where: { id },
  })
}

export const deleteLetter: MutationResolvers['deleteLetter'] = ({ id }) => {
  return db.letter.delete({
    where: { id },
  })
}

export const Letter: LetterResolvers = {
  tryRow: (_obj, { root }) =>
    db.letter.findUnique({ where: { id: root.id } }).tryRow(),
}
