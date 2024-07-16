// import { Request, Response, NextFunction } from 'express';
// import { verify } from 'jsonwebtoken';

// type Role = 'ORGANIZER' | 'CUSTOMER';

// type User = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   role: Role;
//   referral: string;
//   points: number;
//   createdAt: Date;
//   updatedAt: Date;
// };

// declare namespace Express {
//   export interface Request {
//     user?: User;
//   }
// }

// export const verifyToken = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const authToken = await getCookie('authToken');

//     console.log('AUTHORIZATION HEADER => ', req.header('Authorization'));

//     const token = req.header('Authorization')?.replace('Bearer ', '');

//     console.log('token --> ', token);

//     if (!token) {
//       return res.status(401).send('Unauthorized');
//     }

//     const verifyUser = verify(token, 'SECRET_KEY');
//     if (!verifyUser) {
//       return res.status(401).send('Unauthorized');
//     }

//     req.user = verifyUser as User;

//     next();
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({
//       message: 'error',
//       error: JSON.stringify(err),
//     });
//   }
// };
