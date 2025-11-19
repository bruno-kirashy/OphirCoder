import { createToken, createUser, hasEmail } from "@/services/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, nick, email, password } = await request.json();

  if (!name || !nick || !email || !password) {
    return NextResponse.json({ error: "Campos incompletos." });
  }

  const has = await hasEmail(email);
  if (has) return NextResponse.json({ error: "O email, já existe." });

  const token = await createToken();

  const newUser = await createUser(name, nick, email, password, token);
  if (!newUser)
    return NextResponse.json({ error: "Erro ao cadastrar, o usuário." });

  return NextResponse.json({ user: newUser, token }, { status: 201 });
}
