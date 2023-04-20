import { Body, Controller, Get, Param, Patch, Post, Session, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dtos/auth-user.dto';
import { AuthGuard } from '../_guards/auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class UsersController {
    constructor( 
        private userService : UsersService,
        private authService : AuthService){}

    // @UseGuards(AuthGuard)
    @Get('/whoami')
    whoAmI(@CurrentUser() user:User) {
        console.log(user);
        
      return user
    }

    @Post('/signout')
    signOut(@Session() session:any) {
        session.userId = null
    }

    @Post('/signup')
    async createUser(@Body() newUser:CreateUserDto, @Session() session:any) {
        const user =  await this.authService.signUp(newUser)
        session.userId = user.id
        return user 
    }

    @Post('/signin')
    async signIn(@Body() checkUser:AuthUserDto,@Session() session:any){
        const user =  await this.authService.signIn(checkUser)
        session.userId = user.id
        return user 
    }

    @Get('/users')
    async getall(){
        return await this.userService.findAll()
    }

    @Get('/balance')
    async findAccountBalanceByUser(@CurrentUser() user:User){
        return await this.userService.findAccountBalanceByUser(user)
    }

    @Patch('/balance/:amount')
    async udpateAccount(@CurrentUser() user:User, @Param('amount') amount:string,){
        console.log(user)
        return await this.userService.updateAccountBalanceByUser(user,amount)
    }

    @Get('/orders')
    async findAllOrders(@CurrentUser() user:User){
        return await this.userService.findAllOrders(user)
    }

}


