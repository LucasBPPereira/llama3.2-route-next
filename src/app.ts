import express, { type Application } from "express";
import { CorsConfig } from "./config/Cors";
import { HelmetConfig } from "./config/Helmet";
import { RouterExpress } from "./Router";
import { allRoutes } from "./routes";

export class App {
    private express: Application

    constructor() {
        this.express = express();
        this.middlewares();
        this.initializeRoutes();
    }

    public listen(port: number): void {
        this.express.listen(port, () => {
            console.log("Iniciando Servidor")
        })
    }

    private middlewares(): void {
        const cors = new CorsConfig();
        const helmet = new HelmetConfig()

        this.express.use(express.json());
        this.express.use(cors.getMiddleware());
        this.express.use(helmet.getMiddleware());
    }

    private initializeRoutes(): void {
        const mainRouter = new RouterExpress(allRoutes);
        this.express.use("/api", mainRouter.router);
    }
}