import type { Request } from "express";
export interface IControllerResult<T> {
  data: T | T[] | null;
  message: string;
  status?: number             // opcional, default 200 ou 201
}

export interface IController<T = any> {
  handle(req: Request): Promise<IControllerResult<T>>;
}
