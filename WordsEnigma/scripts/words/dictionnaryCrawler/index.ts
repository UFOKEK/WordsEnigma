import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';

import { getDefinition as getDefinitionFR } from './fr';



export default async function getDefinition(language: string, word: string): Promise<any> {
    const languageMap = {
        'fr': getDefinitionFR(word),
    }
    return await languageMap[language];
}
