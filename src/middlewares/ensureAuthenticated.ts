import { AppError } from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "@/configs/auth";

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  ///receber o token - authorization, que vem do cabeçalho da requisição
  const authHeader = request.headers.authorization;

  //garante que o token existe
  if (!authHeader) {
    throw new AppError("Token is missing", 401);
  }

  //retirar o "bearer" - que o insomnia coloca no token
  const [, token] = authHeader.split(" ");

  //verificar se o token é válido
  const { sub: user_id } = verify(token, authConfig.jwt.secret);

  //acessando o usuário na request - com tipagem
  request.user = {
    id: String(user_id),
  };

  return next();
}

export { ensureAuthenticated };
