import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { v4 } from "uuid";

export const hasEmail = async (email: string) => {
  const emailExist = await prisma.users.findUnique({
    where: { email },
  });
  return emailExist ? true : false;
};

export const createUser = async (
  name: string,
  nick: string,
  email: string,
  password: string,
  token: string
) => {
  try {
    const user = await prisma.users.create({
      data: {
        nick,
        name,
        email: email.toLowerCase(),
        password: bcrypt.hashSync(password, 10),
        token,
      },
    });

    return {
      id: user.id,
      nick: user.nick,
      name: user.name,
      email: user.email,
    };
  } catch (err) {
    return null;
  }
};

export const createToken = () => {
  const token = v4();
  return token;
};
