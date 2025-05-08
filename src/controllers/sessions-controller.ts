import { AppError } from "@/utils/AppError";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { authConfig } from "@/configs/auth";

class SessionsController {
  async create(request: Request, response: Response) {
    const { username, password } = request.body;

    //simulando um banco de dados
    const fakeUser = {
      id: "1",
      username: "bruno",
      password: "123456",
    };

    //se não bate o username ou password - passado no body do insomnia
    if (username !== fakeUser.username || password !== fakeUser.password) {
      throw new AppError("Username or password incorrect!", 401);
    }

    //retornando o token - se ok
    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(fakeUser.id),
      expiresIn,
    });

    return response.json({ token });
  }
}

export { SessionsController };
