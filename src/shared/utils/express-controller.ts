import type { Request, Response } from "express";
import type { IController } from "@/interfaces/controller.interface";
import { getErrorResponse } from "./error/handleError";

/**
 * Adapta um IController para um RequestHandler do Express,
 * incluindo formatação de respostas de sucesso e erro,
 * além de aproveitar res.locals.time setado pelo middleware.
 */
export const expressAdapter = <T>(controller: IController<T>) => {
    return async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await controller.handle(req);
            const time = res.locals.time;

            res
                .status(result.status ?? 200)
                .json({
                    success: true,
                    message: result.message,
                    data: result.data,
                    time,
                });
        } catch (error: unknown) {
            const time = res.locals.time;
            const { success, message, data, statusCode } = getErrorResponse(error);

            res
                .status(statusCode)
                .json({ success, message, data, time });
        }
    };
};