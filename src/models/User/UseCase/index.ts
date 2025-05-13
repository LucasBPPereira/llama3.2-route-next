import { prismaUserRepository } from "@/database/prisma/repository/PrismaUser.repository";
import { CreateNewUserUseCase } from "./CreateNewUser.usecase";
import { GetAllUsersUseCase } from "./GetAllUsers.usecase";

export const createNewUserUC = new CreateNewUserUseCase(prismaUserRepository);
export const getAllUsersUC = new GetAllUsersUseCase(prismaUserRepository);