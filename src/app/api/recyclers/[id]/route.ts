import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string }}) {
  try {
    const recycler = await prisma.recycler.findUnique({
        where: { id: Number(params.id) }
    });
    return Response.json(recycler);
  } catch (error) {
    return Response.json({ error });
  }
}

