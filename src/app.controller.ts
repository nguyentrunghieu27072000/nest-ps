import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as _ from 'lodash';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const users = [6.5, 4.12, 6.8, 5.4];
    const grouped_data = _.groupBy(users, Math.floor);
    console.log(grouped_data);
    return this.appService.getHello();
  }
}
