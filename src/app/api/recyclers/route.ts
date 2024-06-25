import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const recyclers = await prisma.recycler.findMany();
    return Response.json(recyclers);
  } catch (error) {
    return Response.json({ error });
  }
}
