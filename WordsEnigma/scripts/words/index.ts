import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';

import { addWords as addWordsFR } from './fr';

export default async function addWords(db: PrismaClient, logger: Logger) {
    await addWordsFR(db, logger);
}
