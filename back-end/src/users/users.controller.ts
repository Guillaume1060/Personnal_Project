import { Body, Controller, Get, Param, Patch, Post, Session, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dtos/auth-user.dto';
import { AdminGuard } from 'src/_guards/admin.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './user.entity';
import { ApiBadRequestResponse, ApiCookieAuth, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("User management")
@Controller('auth')
export class UsersController {
    constructor( 
        private userService : UsersService,
        private authService : AuthService){}

    @ApiOperation({ summary : "To know who is connected"})
    @ApiCreatedResponse({
        description: 'User if found',
        type: User
    })
    @Get('/whoami')
    whoAmI(@CurrentUser() user:User) {
      if (!user) return { message:'no user connected'}
      return user
    }

    @ApiOperation({ summary : "Disconnection"})
    @ApiCreatedResponse({
        description: 'User disconnected',
    })
    @Post('/signout')
    signOut(@Session() session:any) {
        session.userId = null
        return { message:'user disconnected'}
    }

    @ApiOperation({ summary : "Register"})
    @Post('/signup')
    @ApiCreatedResponse({
        description: 'Registration Done!',
        type: User
    })
    @ApiBadRequestResponse({description: 'Registration Refused'})
    async createUser(@Body() newUser:CreateUserDto, @Session() session:any) {
        const user =  await this.authService.signUp(newUser)
        session.userId = user.id
        return user 
    }

    @ApiOperation({ summary : "Connection"})
    @Post('/signin')
    @ApiCreatedResponse({
        description: 'User Found!',
        type: User
    })
    @ApiBadRequestResponse({description: 'User not found, try again.'})
    async signIn(@Body() checkUser:AuthUserDto,@Session() session:any){
        const user =  await this.authService.signIn(checkUser)
        session.userId = user.id
        return user 
    }

    @ApiOperation({ summary : "Get all users (AdminGuard)"})
    @ApiCookieAuth()
    @UseGuards(AdminGuard)
    @ApiCreatedResponse({
        description: 'List of users',
        type: [User]
    })
    @Get('/users')
    async getall(){
        return await this.userService.findAll()
    }

    @ApiOperation({ summary : "User account of connected user"})
    @ApiCreatedResponse({
        description: 'wallet balance',
    })
    @Get('/balance')
    async findAccountBalanceByUser(@CurrentUser() user:User){
        return await this.userService.findAccountBalanceByUser(user)
    }

    @ApiOperation({ summary : "User expense"})
    @ApiCreatedResponse({
        description: 'update wallet balance',
        type: User
    })
    @ApiBadRequestResponse({description: 'not enough money'})
    @Patch('/balance/:amount')
    async udpateAccount(@CurrentUser() user:User, @Param('amount') amount:string,){
        return await this.userService.updateAccountBalanceByUser(user,amount)
    }

    @ApiOperation({ summary : "All user orders of connected user"})
    @ApiCreatedResponse({
        description: 'User orders',
        type: User
    })
    @Get('/orders')
    async findAllOrders(@CurrentUser() user:User){
        return await this.userService.findAllOrders(user)
    }

}

