import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';

const languageCode = 'fr'

export async function addWordBank(db: PrismaClient, logger: Logger) {
    await db.wordBank.upsert(
        {
            where: {
                name: languageCode,
            },
            update: {},
            create: {
                name: languageCode,
                Language: {
                    connect: {
                        code: languageCode,
                    },
                },
            }
        });
    logger.debug('Added word bank')
}