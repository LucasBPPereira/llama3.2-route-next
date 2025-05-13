import type { IRouteDefinition } from "@/interfaces/Routes/routerDefinition.interface";
import { responseTimeInjector } from "@/middleware/response-time-injector.middleware";
import { createNewUserController, getAllUsersController } from "@/models/User/Controller";
import { expressAdapter } from "@/shared/utils/express-controller";

export const userRoutes: IRouteDefinition[] = [
    {
        method: "post",
        path: "/",
        middlewares: [responseTimeInjector],
        handler: expressAdapter(createNewUserController), 
    },
    {
        method: "get",
        path: "/",
        middlewares: [responseTimeInjector],
        handler: expressAdapter(getAllUsersController)
    }
]