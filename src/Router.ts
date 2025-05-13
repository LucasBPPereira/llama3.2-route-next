import { Router } from "express";
import type { IRoute } from "./interfaces/Routes/router.interface.js";

export class RouterExpress {
    public router: Router;

    constructor(routes: IRoute[]){
        this.router = Router();
        this.initializeRoutes(routes);
    }

    private initializeRoutes(routes: IRoute[]): void {
        routes.forEach((route) => {
            this.router.use(route.path, route.router);
        })
    }
}

