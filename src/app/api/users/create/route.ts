import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const user = await prisma.user.create({
            data: body
        });
        return Response.json(user);
    } catch (error) {
        return Response.json({ error });
    }
}

