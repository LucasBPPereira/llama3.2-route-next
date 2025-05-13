import type { UserDomain } from "../User";
import type { IUserRepository } from "../UserRepository.interface";

export class GetAllUsersUseCase {
    constructor(
        private userRepo: IUserRepository
    ){}

    public async execute(): Promise<UserDomain[] | []> {
        const users = await this.userRepo.findAllUsers();

        return users;
    }

}