import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { MesureDurationInterceptor } from './mesure-duration/mesure-duration.interceptor';
import { LogClientsInterceptor } from './log-clients/log-clients.interceptor';
import { EnrichResponseInterceptor } from './enrich-response/enrich-response.interceptor';
import { FilterRequestInterceptor } from './filter-request/filter-request.interceptor';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:name')
  @UseInterceptors(MesureDurationInterceptor, FilterRequestInterceptor)
  getHello(@Param('name') name: string): string {
    return this.appService.getHello(name);
  }
}
