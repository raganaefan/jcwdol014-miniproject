import { User } from '@prisma/client'; // Assuming you have a User type in your Prisma schema

declare module 'express-serve-static-core' {
  interface Request {
    user?: User; // Add the user property to the Request interface
  }
}