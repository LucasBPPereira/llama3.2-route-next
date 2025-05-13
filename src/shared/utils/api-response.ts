import type { Response } from "express";

export const ApiResponse = <T>(res: Response, status: number = 200, data: T | null, message?: string) => {
    res.status(status);
    res.json({ success: true, message, data });
};
