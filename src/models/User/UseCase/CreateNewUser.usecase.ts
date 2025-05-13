import type { IUserRepository } from "../UserRepository.interface";
import type { ICreateNewUserDTO } from "../DTO/CreateNewUser.dto";
import { BadRequestError } from "@/shared/utils/error/BadRequestError";
import type { UserDomain } from "../User";

export class CreateNewUserUseCase {
    constructor(
        private readonly userRepository: IUserRepository
    ) { }

    public async execute(user: ICreateNewUserDTO): Promise<UserDomain> {
        const exist = await this.userRepository.findByEmail(user.email);
        if (exist) {
            throw new BadRequestError("Não é possível criar um novo usuário pois este já existe")
        }

        const newUser = await this.userRepository.createNewUser(user);
        return newUser;
    }
}