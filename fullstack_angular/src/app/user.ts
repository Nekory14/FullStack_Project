import { TypeUser } from "./type-user";

export class User {
    id!: number;
    typeUser: TypeUser = new TypeUser;
    name!: string;
    firstName!: string;
    email!: string;
}
