import connectToDB from '@/database';
import Joi from 'joi';
import User from '@/models/user';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const schema = Joi.object({
  email: Joi.string().email().required(),
  senha: Joi.string().required(),
});

export const dynamic = 'force-dynamic';

export async function POST(req) {
  await connectToDB();

  const { email, senha } = await req.json();

  const { error } = schema.validate({ email, senha });

  if (error) {
    return NextResponse.json({
      success: false,
      message: email.details[0].message,
    });
  }

  try {
    const checkUser = await User.findOne({ email });

    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: 'Conta não encontrada!!!',
      });
    }
    const checkSenha = await compare(senha, checkUser.senha);

    if (!checkSenha) {
      return NextResponse.json({
        success: false,
        message: 'Senha incorreta, tente novamente.',
      });
    }

    const token = jwt.sign(
      {
        id: checkUser._id,
        email: checkUser?.email,
        role: checkUser?.role,
      },
      'default_secret_key',
      { expiresIn: '1d' },
    );

    const finalData = {
      token,
      user: {
        email: checkUser.email,
        nome: checkUser.nome,
        _id: checkUser._id,
        role: checkUser.role,
      },
    };

    return NextResponse.json({
      success: true,
      message: 'Login realizado com sucesso!!!',
      finalData,
    });
  } catch (error) {
    console.log(`Erro ao fazer login, por favor tente novamente!!! ${error}`);

    return NextResponse.json({
      success: false,
      message: 'Algo deu errado! Por favor, tente novamente mais tarde!!!',
    });
  }
}
