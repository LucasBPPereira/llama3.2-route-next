import { createNewUserUC, getAllUsersUC } from "../UseCase";
import { CreateNewUserController } from "./CreateNewUser.controller";
import { GetAllUsersController } from "./GetAllUsers.controller";

export const createNewUserController = new CreateNewUserController(createNewUserUC);
export const getAllUsersController = new GetAllUsersController(getAllUsersUC);