import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { UsersService } from "../users.service";
import { User } from "../user.entity";
import { Request } from "express";


// Ci dessous on customise request pour ajouter 'currentUser' à la Request d'express
declare global {
    namespace Express {
        interface Request {
            currentUser?: User
        }
    }
}


@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
    constructor(private userService: UsersService) {}
    
    async use(req:Request,res:Response,next:NextFunction) {
        const {userId} = req.session || {}
        console.log('CurrentUserMiddleware',req.session,);
        if (userId) {
            const user = await this.userService.findOne(userId)
            req.currentUser = user
        }
        next()
    }
}