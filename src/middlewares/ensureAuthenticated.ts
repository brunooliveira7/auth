import { AppError } from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "@/configs/auth";

//interface para tipagem payload do token
interface TokenPayload {
  role: string;
  sub: string;
}

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

  //verificar se o token é válido, e extrai o id do usuário, e o papel
  const { sub: user_id, role } = verify(
    token,
    authConfig.jwt.secret
  ) as TokenPayload;

  //inseri o id, e o papel na request - com tipagem
  request.user = {
    id: String(user_id),
    role,
  };

  return next();
}

export { ensureAuthenticated };
