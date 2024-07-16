// import { NextFunction, Request, Response } from 'express';
// import jwt, { JwtPayload } from 'jsonwebtoken';

// type Role = 'ORGANIZER' | 'CUSTOMER';

// declare global {
//   namespace Express {
//     interface Request {
//       user: {
//         id: number;
//         firstName: string;
//         lastName: string;
//         email: string;
//         password?: string;
//         role: Role;
//         referral?: string;
//         points?: number;
//         createdAt?: Date;
//         updatedAt?: Date;
//       };
//     }
//   }
// }

// export async function verifyToken(
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) {
//   const authorizationHeader = req.headers['authorization'];
//   if (!authorizationHeader) {
//     return res.status(401).send('Unauthorized');
//   }

//   const token = authorizationHeader.replace('Bearer ', '');
//   if (!token) {
//     return res.status(401).send('Unauthorized');
//   }

//   try {
//     const verifiedUser = jwt.verify(
//       token,
//       process.env.JWT_SECRET!,
//     ) as JwtPayload & {
//       id: number;
//       firstName: string;
//       lastName: string;
//       email: string;
//       role: Role;
//     };

//     if (!verifiedUser) {
//       return res.status(401).send('Unauthorized');
//     }

//     req.user = {
//       id: verifiedUser.id,
//       firstName: verifiedUser.firstName,
//       lastName: verifiedUser.lastName,
//       email: verifiedUser.email,
//       role: verifiedUser?.role,
//     };

//     next();
//   } catch (error) {
//     return res.status(401).send('Unauthorized');
//   }
// }
