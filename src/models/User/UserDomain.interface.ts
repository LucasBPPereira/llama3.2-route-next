export interface IUserDomain {
    id: string;
    name: string;
    email: string;
    age: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserConstructor {
    id?: string;
    name: string;
    email: string;
    age: string;
    createdAt?: Date;
    updatedAt?: Date;
}