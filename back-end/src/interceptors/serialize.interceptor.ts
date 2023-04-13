import { UseInterceptors, NestInterceptor, ExecutionContext,CallHandler  } from '@nestjs/common'
import { plainToInstance  } from 'class-transformer'
import { Observable, map } from 'rxjs'


// ci dessous pour créer le typage du dto
interface ClassConstructor {
    new (...args:any[]):{}
}

// decorator creation
export function Serialize(dto:ClassConstructor) {
    return UseInterceptors(new SerializeInterceptor(dto))
}

// interceptors
export class SerializeInterceptor implements NestInterceptor {
    constructor(private dto:ClassConstructor) {}

    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        // Here run something before a request is handled by the request handler
        return handler.handle().pipe(
            map((data:any)=> {
               return plainToInstance (this.dto, data, {
                excludeExtraneousValues: true
               })
            })
        )       
    }
}
