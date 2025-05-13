import type { ICreateNewUserDTO } from "./DTO/CreateNewUser.dto";
import type { UserDomain } from "./User";

export interface IUserRepository {
    createNewUser(user: ICreateNewUserDTO): Promise<UserDomain>;
    findAllUsers(): Promise<UserDomain[] | []>;
    findByEmail(email: string): Promise<UserDomain | null>;
}