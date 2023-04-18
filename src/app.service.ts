import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllDeeds(): string {
    return 'get All deeps';
  }
}
