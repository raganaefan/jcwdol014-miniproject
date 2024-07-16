// import { Request, Response } from 'express';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export const redeemPoints = async (req: Request, res: Response) => {
//   try {
//     if (!req.user) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const user = await prisma.user.findUnique({ where: { id: req.user.id } });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     if (user.points >= 10000) {
//       await prisma.user.update({
//         where: { id: req.user.id },
//         data: { points: 0 },
//       });
//       res.json({ message: 'Points redeemed for a discount' });
//     } else {
//       res.status(400).json({ message: 'Not enough points' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
