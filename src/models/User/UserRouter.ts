import type { IRoute } from "@/interfaces/Routes/router.interface";
import type { IRouteDefinition } from "@/interfaces/Routes/routerDefinition.interface";
import { userRoutes } from "@/routes/user.routes";
import { Router } from "express";

export class UserRoute implements IRoute {
    public path: string = "/user";
    public router = Router();
    constructor(){
        this.initializeRoutes(userRoutes);
    }

    private initializeRoutes(routes: IRouteDefinition[]): void {
        routes.forEach(({method, handler, middlewares = [], path }) => {
            this.router[method](path, ...middlewares, handler)
        })
        
    }
}