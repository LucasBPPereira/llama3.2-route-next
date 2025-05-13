
import { generateUUID } from "@/shared/utils/generate-uuid";
import type { IUserConstructor, IUserDomain } from "./UserDomain.interface";

export class UserDomain {
    private id: string;
    private name: string;
    private age: Date;
    private email: string;
    private createdAt: string;
    private updatedAt: string;

    constructor(user: IUserConstructor) {
        this.id = user.id!;
        this.name = user.name;
        this.email = this.verifyEmail(user.email);
        this.age = new Date(user.age);
        this.createdAt = new Date(user.createdAt!).toISOString();
        this.updatedAt = new Date(user.updatedAt!).toISOString();
    }

    private verifyEmail(email: string): string {
        const emailContainsAt = email.trim().includes("@");
        if (!emailContainsAt) {
            throw new Error(`Formato de e-mail inválido: está faltando o @ no e-mail`);
        }
        const emailWithoutDomain = email.split("@")[1].trim();
        if (emailWithoutDomain === "") {
            throw new Error("Formato de e-mail inválido: sem domínio")
        }
        const emailWithoutTLD = emailWithoutDomain.split(".");
        if (emailWithoutTLD.length < 2 || !emailWithoutTLD[1].trim()) {
            throw new Error("Formato de e-mail inválido: sem o TLD")
        }

        return email;
    }

    public isAdult(): boolean {
        const today = new Date();
        const birthDate = this.age;

        if (isNaN(birthDate.getTime())) {
            return false;
        }
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 18;
    }

}
