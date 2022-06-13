import { PrismaClient } from "@prisma/client";
import { Logger } from "pino";

const CryptoJS = require('crypto-js')

const languageId = '2';
const languageCode = 'en'

export async function addUsers(prisma: PrismaClient, logger: Logger) {
    for (const user of Users) {
        const salt = CryptoJS.lib.WordArray.random(128 / 8).toString()
        const hashedPassword = CryptoJS.PBKDF2(user.password, salt, { keySize: 256 / 32 }).toString()
        await prisma.user.upsert(
            {
                where: {
                    username: user.username,
                },
                update: {},
                create: {
                    username: user.username,
                    name: user.name,
                    email: user.email,
                    roles: user.roles,
                    hashedPassword: hashedPassword,
                    salt: salt,
                    userSetting: {
                        create: {
                            Language: {
                                connect: {
                                    code: "en",
                                }
                            }
                        }
                    }
                }
            });
        logger.debug({ data: user }, "Added user")
    }
}


export const Users = [
    {
        username: "admin",
        name: "Admin",
        email: "admin@admin.com",
        password: "admin",
        roles: "admin"
    },
    {
        username: "user",
        name: "User",
        email: "user@user.com",
        password: "user",
        roles: "user"
    }
]