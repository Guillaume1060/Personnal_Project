import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}
    create (newUser : CreateUserDto, password:string) {
        newUser.password = password
        const user = this.repo.create(newUser);
        return this.repo.save(user)
    }
    findOne(id:number) {
        if (!id) return null
        return this.repo.findOneBy({id});
    }
    find(email: string) {
        return this.repo.find({ where: { email } });
    }
    findAll() {
        return this.repo.find();
    }
    async update(id:number,attrs:Partial<User>) {
        const user = await this.repo.findOneBy({id});
        if (!user) throw new NotFoundException('user not found')
        Object.assign(user,attrs)
        return this.repo.save(user)
    }
    async remove(id:number) {
        const user = await this.repo.findOneBy({id});
        if (!user) throw new NotFoundException('user not found')
        // this.repo.delete(id) // No Hook
        return this.repo.remove(user); // Hook
    }
}
