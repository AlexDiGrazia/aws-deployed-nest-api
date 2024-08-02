import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world! For week 5 we Deployed our API with GitHub Actions Automation!';
  }
}
