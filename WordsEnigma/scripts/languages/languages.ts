import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';

export async function addLanguages(prisma: PrismaClient, logger: Logger) {
    for (const language of Languages) {
        await prisma.language.upsert(
            {
                where: {
                    code: language.code,
                },
                update: {},
                create: {
                    id: language.id,
                    name: language.name,
                    code: language.code,
                }
            });
        logger.debug({ data: language }, 'Added language')
    }
}

export const Languages = [
    {
        id: '1',
        name: 'English',
        code: 'en',
    },
    {
        id: '2',
        name: 'French',
        code: 'fr',
    },
    {
        id: '3',
        name: 'Spanish',
        code: 'es',
    },
    {
        id: '4',
        name: 'German',
        code: 'de',
    },

    {
        id: '5',
        name: 'Italian',
        code: 'it',
    },
    {
        id: '6',
        name: 'Portuguese',
        code: 'pt',
    },
]