import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';
import getDefinition from './dictionnaryCrawler';
import { WordsFR } from '../data/fr';
import { logger } from '$api/src/lib/logger';

const languageCode = 'fr'

export async function addWords(db: PrismaClient, logger: Logger) {
    try {
         const mapWordDefinition = await getDefinitionMapping();
        await db.word.createMany({ data: mapWordDefinition });
    } catch (err) {
        logger.error(err)
    }
}

async function getDefinitionMapping(){
    let mapWordDefinition = [];
    for (const word of WordsFR) {
        const definition = await getDefinition(languageCode, word);
        if (definition) {
            mapWordDefinition.push({
                word: word,
                definition: definition.definition,
                source: definition.source,
                size: word.length,
                Language: {
                    connect: {
                        code: languageCode,
                    },
                },
                WordBank: {
                    connect: {
                        name: languageCode
                    }
                }
            })
            logger.info(`${word} added`)
        }
    }
    return mapWordDefinition
}