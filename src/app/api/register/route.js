import connectToDB from '@/database';
import User from '@/models/user';
import { hash } from 'bcryptjs';
import Joi from 'joi';
import { NextResponse } from 'next/server';

const schema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

export const dynamic = 'force-dynamic';

export async function POST(req) {
  await connectToDB();

  const { nome, email, senha, role } = await req.json();

  //validação do Schema
  const { error } = schema.validate({ nome, email, senha, role });

  if (error) {
    return NextResponse.json({
      success: false,
      message: email.details[0],
    });
  }

  try {
    //verificando se existe ou não o usuário.
    const existeUser = await User.findOne({ email });
    if (existeUser) {
      return NextResponse.json({
        success: false,
        message: 'Usuário já existe. Por favor use um email diferente.',
      });
    } else {
      const hashSenha = await hash(senha, 12);

      const newUser = await User.create({
        nome,
        email,
        senha: hashSenha,
        role,
      });

      if (newUser) {
        return NextResponse.json({
          success: true,
          message: 'Usuário criado com sucesso.',
        });
      }
    }
  } catch (error) {
    console.log(`Erro ao registrar novo usuário, ${error}`);

    return NextResponse.json({
      success: false,
      message: 'Algo deu errado! Por favor, tente novamente mais tarde!!!',
    });
  }
}
