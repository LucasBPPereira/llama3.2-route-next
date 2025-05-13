import type { IRoute } from "@/interfaces/Routes/router.interface";
import { UserRoute } from "@/models/User/UserRouter";

export const allRoutes: IRoute[] = [
    new UserRoute(),
];