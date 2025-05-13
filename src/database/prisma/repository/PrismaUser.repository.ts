import { UserDomain } from "@/models/User/User";
import type { IUserRepository } from "@/models/User/UserRepository.interface";
import { prisma } from "../prisma";
import type { ICreateNewUserDTO } from "@/models/User/DTO/CreateNewUser.dto";
import { generateUUID } from "@/shared/utils/generate-uuid";

export class PrismaUserRepository implements IUserRepository {
    public async createNewUser(user: ICreateNewUserDTO): Promise<UserDomain> {
        const newUser = await prisma.user.create({
            data: {
                id: generateUUID(),
                name: user.name,
                age: user.age,
                email: user.email
            }
        });

        return new UserDomain({ ...newUser, age: String(newUser.age) });

    }
    public async findByEmail(email: string): Promise<UserDomain | null> {
        const userEmail = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (!userEmail) return null;

        return new UserDomain({
            id: userEmail.id,
            name: userEmail.name,
            age: String(userEmail.age),
            email: userEmail.email,
            createdAt: userEmail.createdAt,
            updatedAt: userEmail.updatedAt
        });
    }
    public async findAllUsers(): Promise<UserDomain[] | []> {
        const users = await prisma.user.findMany();
        if (users.length === 0) return [];
        console.log(users)
        return users.map((user) => new UserDomain({
            ...user,
            age: String(user.age)
        }))
    }
}

export const prismaUserRepository = new PrismaUserRepository() 