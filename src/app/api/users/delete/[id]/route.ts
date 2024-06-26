import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: Request, { params }: { params: { id: string }}) {
    try {
        const user = await prisma.user.delete({
            where: { id: Number(params.id) }
        });
        return Response.json(user);
    } catch (error) {
        console.log(error)
        return Response.json({ error });
    }
}

