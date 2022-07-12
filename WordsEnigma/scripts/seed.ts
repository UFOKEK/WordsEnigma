import { db } from 'api/src/lib/db'
import { logger } from 'api/src/lib/logger'

import addUsers from 'users'
import addLanguages from './languages'
import addWordBanks from './wordBanks'
import addWords from './words'

export default async function main() {
  try {
    // await addLanguages(db, logger);
    // await addUsers(db, logger);
    await addWordBanks(db, logger);
    // await addWords(db, logger);
  } catch (err) {
    logger.error(err)
    db.$disconnect()
    process.exit(1)
  }
}

