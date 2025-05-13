import type { IController, IControllerResult } from "@/interfaces/controller.interface";
import type { CreateNewUserUseCase } from "../UseCase/CreateNewUser.usecase";
import type { Request } from "express";
import type { ICreateNewUserDTO } from "../DTO/CreateNewUser.dto";
import type { UserDomain } from "../User";

export class CreateNewUserController implements IController {
    constructor(
        private createNewUserUC: CreateNewUserUseCase
    ) { }
    public async handle(req: Request<{}, {}, ICreateNewUserDTO>): Promise<IControllerResult<UserDomain>> {
        const userReq = req.body;
        if (!userReq.age.trim() || !userReq.name.trim() || !userReq.email.trim()) {

        }

        const user = await this.createNewUserUC.execute(userReq);
        return {
            message: "Usuário criado com sucesso!",
            status: 201,
            data: user,
        }

    }

}