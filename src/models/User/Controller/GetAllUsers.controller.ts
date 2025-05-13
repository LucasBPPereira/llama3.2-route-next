import type { IController, IControllerResult } from "@/interfaces/controller.interface";
import type { GetAllUsersUseCase } from "../UseCase/GetAllUsers.usecase";
import type { Request } from "express";
import type { UserDomain } from "../User";

export class GetAllUsersController implements IController {
    constructor(
        private getAllUsersUC: GetAllUsersUseCase
    ) { }
    public async handle(req: Request): Promise<IControllerResult<UserDomain[]>> {
        const users = await this.getAllUsersUC.execute();
        return {
            message: "Usuários retornados com sucesso",
            status: 200,
            data: users
        }
    }

}