import { Injectable } from "@nestjs/common";
import { UserEntity } from "./entities/user-entity.js";

@Injectable()
export class UsersService {
    private users: UserEntity[] = [];
    private nextId: number = 1;

    async createUser(name: string, email: string, passwordHash: string, role: string): Promise<UserEntity> {
        const newUser: UserEntity = {
            id: this.nextId++,
            name,
            email,
            passwordHash,
            role
        };
        this.users.push(newUser);
        return newUser;
    }

    async findUserByEmail(email: string): Promise<UserEntity | undefined> {
        return this.users.find(user => user.email === email);
    }

    async updateUserPassword(email: string, newPasswordHash: string): Promise<UserEntity | undefined> {
        const user = await this.findUserByEmail(email);
        if (user) {
            user.passwordHash = newPasswordHash;
        }
        return user;
    }
}