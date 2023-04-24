import { Body, Controller, Get, Param, Patch, Post, Session, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dtos/auth-user.dto';
import { AuthGuard } from '../_guards/auth.guard';
import { AdminGuard } from 'src/_guards/admin.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './user.entity';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';


@ApiTags("Gestion des utilisateurs")
@Controller('auth')
export class UsersController {
    constructor( 
        private userService : UsersService,
        private authService : AuthService){}

    // @UseGuards(AdminGuard)
    @ApiOperation({ summary : "Permet de savoir qui est connecté"})
    @Get('/whoami')
    whoAmI(@CurrentUser() user:User) {
      return user
    }

    @ApiOperation({ summary : "Déconnexion"})
    @Post('/signout')
    signOut(@Session() session:any) {
        console.log(session);
        // res.clearCookie('session');
        session.userId = null
        console.log('apres',session.userId);
    }

    @ApiOperation({ summary : "Inscription"})
    @Post('/signup')
    async createUser(@Body() newUser:CreateUserDto, @Session() session:any) {
        const user =  await this.authService.signUp(newUser)
        session.userId = user.id
        return user 
    }

    @ApiOperation({ summary : "Connexion"})
    @Post('/signin')
    async signIn(@Body() checkUser:AuthUserDto,@Session() session:any){
        const user =  await this.authService.signIn(checkUser)
        session.userId = user.id
        return user 
    }

    @ApiOperation({ summary : "Récupérer tous les utilisateurs"})
    @Get('/users')
    async getall(){
        return await this.userService.findAll()
    }

    @ApiOperation({ summary : "Accès à son solde de l'utilisateur connecté"})
    @Get('/balance')
    async findAccountBalanceByUser(@CurrentUser() user:User){
        return await this.userService.findAccountBalanceByUser(user)
    }

    @ApiOperation({ summary : "Dépense de l'utilsateur connecté"})
    // @ApiParam({ name : "Montant dépensé",  required : true })
    @Patch('/balance/:amount')
    async udpateAccount(@CurrentUser() user:User, @Param('amount') amount:string,){
        return await this.userService.updateAccountBalanceByUser(user,amount)
    }

    @ApiOperation({ summary : "Accès à toutes les commandes de l'utilisateur connecté"})
    @Get('/orders')
    async findAllOrders(@CurrentUser() user:User){
        return await this.userService.findAllOrders(user)
    }

}

