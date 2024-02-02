import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class EnrichResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(valueFromRouteHandler => {
        //return (valueFromRouteHandler as string).toLocaleUpperCase();
        return { 
          initialContent: valueFromRouteHandler, 
          editedContent: (valueFromRouteHandler as string).toLocaleUpperCase(),
          length: (valueFromRouteHandler as string).length,
        };
      }),
    );
  }
}
