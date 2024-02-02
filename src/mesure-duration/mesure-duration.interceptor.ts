import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class MesureDurationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('intercepting request', context);
    return next.handle().pipe(
      tap(valueFromRouteHandler => 
        console.log('After controller sending response', valueFromRouteHandler.toUpperCase()))
    );
  }
}
