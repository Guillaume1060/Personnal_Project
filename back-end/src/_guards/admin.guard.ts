import { CanActivate, ExecutionContext } from "@nestjs/common";

export class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest()
        if(!request.currentUser) return false
        return request.currentUser.admin      
        // if user is admin, return it (so truthly value). If not, falsy
    }
}   