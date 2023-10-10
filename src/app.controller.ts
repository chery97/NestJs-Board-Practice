import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    // 지라 테스트10
    return this.appService.getHello();
    // 지라 테스트
  }
}
