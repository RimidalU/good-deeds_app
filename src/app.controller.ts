import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/deed')
export class AppController {
  constructor(private appServise: AppService) {}
  @Get()
  getAllDeeds() {
    return this.appServise.getAllDeeds();
  }
}
