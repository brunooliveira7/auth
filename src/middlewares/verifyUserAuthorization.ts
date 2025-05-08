import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";

//dar permissão para o usuário
function verifyUserAuthorization(role: string[]) {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.user || !role.includes(request.user.role)) {
      throw new AppError("User unauthorized", 401);
    }

    return next();
  };
}

export { verifyUserAuthorization };
