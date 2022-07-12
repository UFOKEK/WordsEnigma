import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';
import { WordsEN } from '../data/en';

const languageCode = 'en';

export async function addWords(db: PrismaClient, logger: Logger) {
    for (const word of WordsEN) {
        await db.word.upsert({
            where: {
                word: word,
            },
            update: {},
            create: {
                word: word,
                definition: "",
                source: "",
                example: "",
                synonym: "",
                size: word.length,
                Language: {
                    connect: {
                        code: languageCode
                    }
                },
                WordBank: {
                    connect: {
                        name: languageCode
                    }
                }
            }
        })
        logger.debug(`Added word ${word}`)
        // const defintion = await getDefinition(languageCode, word)
        // if (defintion) {
        //     db.word.update({
        //         where: {
        //             word: word,
        //         },
        //         data: {
        //             definition: defintion.definition,
        //             source: defintion.source,
        //         }
        //     })
        //     logger.debug(`Updated word ${word}`)
        // }
    }
}