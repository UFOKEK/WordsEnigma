import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';

import { addWordBank as addWordBankFR } from './fr';

export default async function addWords(db: PrismaClient, logger: Logger) {
    await addWordBankFR(db, logger);
}