import type { RequestHandler } from "express";

export interface IRouteDefinition {
    method: "get" | "post" | "put" | "delete";
    path: string;
    middlewares?: RequestHandler[]
    handler: RequestHandler
}