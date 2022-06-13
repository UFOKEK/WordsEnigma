import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';

import { addUsers } from './users';

export default async function addWords(db: PrismaClient, logger: Logger) {
    await addUsers(db, logger);
}
