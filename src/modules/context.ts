import { PrismaClient, User } from "@prisma/client"

export interface Context {

    prisma: PrismaClient
    select: any
    gotKey: boolean


    user?: User,
    isLogged: boolean,
    isAdmin: boolean,

}



export const prisma = new PrismaClient({
    log: ["query"]
});




export const context = {
    prisma,
    select: {},

}
