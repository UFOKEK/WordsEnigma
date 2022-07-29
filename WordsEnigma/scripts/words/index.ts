import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';

import { addWords as addWordsFR } from './fr';
import { addWords as addWordsEN } from './en';
import { addWords as addWordsES } from './es';

export default async function addWords(db: PrismaClient, logger: Logger) {
    await addWordsFR(db, logger);
    await addWordsEN(db, logger);
    await addWordsES(db, logger);
}
