import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { promisify } from "util";
import { scrypt as _scrypt, randomBytes } from "crypto";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { AuthUserDto } from "./dtos/auth-user.dto";
// import { JwtService } from "@nestjs/jwt";
// import { JWT_SECRET } from "./constant";

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        // private jwtService: JwtService,
        ) {}

    async signUp(newUser : CreateUserDto) {
        // 1.see if email
        const users = await this.usersService.find(newUser.email)
        if (users.length) throw new BadRequestException('email in use')
        // 2.Hash password
        // generate salt
        const salt = randomBytes(8).toString('hex')
        // hash the salt and the password together
        const hash = (await scrypt(newUser.password, salt, 32)) as Buffer
        // join hashed result and the salt together
        const result = salt + '.' + hash.toString('hex')
        // 3.create new user and save it
        const user = await this.usersService.create(newUser, result)
        return user

        // token part
        // const payload = { username: user.name, sub: user.id}
        // return {
        //     access_token : await this.jwtService.signAsync(payload,{ secret : JWT_SECRET})
        // }
    }

    async signIn(checkUser : AuthUserDto) {
        const [user] = await this.usersService.find(checkUser.email)
        if (!user) throw new NotFoundException('user not found')
        const [salt,storedhash] = user.password.split('.')
        const hash = await scrypt(checkUser.password,salt,32) as Buffer
        if (hash.toString('hex') !== storedhash) throw new BadRequestException('bad password')
        return user
        // token part
        // const payload = { username: user.name, sub: user.id}
        // return {
        //     access_token : await this.jwtService.signAsync(payload,{ secret : JWT_SECRET})
        // }
    }
}


