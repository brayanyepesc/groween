import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const AuthenticateUser = async (email: string, code: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (user && user.code === code) {
        const id = '1';
        const name = 'Test'
        return {
            id,
            name: name,
            email: user.email
        };
    } else {
        console.error("Invalid email or code");
        return null;
    }
  } catch (error) {
        console.error("Error during login:", error);
        return null;
  }
};
