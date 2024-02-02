import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { MesureDurationInterceptor } from './mesure-duration/mesure-duration.interceptor';
import { LogClientsInterceptor } from './log-clients/log-clients.interceptor';
import { EnrichResponseInterceptor } from './enrich-response/enrich-response.interceptor';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(MesureDurationInterceptor, LogClientsInterceptor, EnrichResponseInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }
}
