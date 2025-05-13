import type { Request, Response, NextFunction } from "express";

export const responseTimeInjector = (req: Request, res: Response, next: NextFunction) => {
    const start = process.hrtime();

    const originalJson = res.json.bind(res);

    res.json = (body: any) => {
        const [seconds, nanoseconds] = process.hrtime(start);
        const ms = (seconds * 1000 + nanoseconds / 1e6).toFixed(2);
        res.locals.time = `${ms}ms`;
        return originalJson({ ...body, time: res.locals.time });
    };

    next();
};
