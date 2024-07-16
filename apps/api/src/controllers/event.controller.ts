import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllEvents(req: Request, res: Response) {
  try {
    const events = await prisma.event.findMany();

    return res.status(200).send({ message: 'success', data: events });
  } catch (err) {
    return res.status(500).send({
      message: 'error',
      data: JSON.stringify(err),
    });
  }
}
