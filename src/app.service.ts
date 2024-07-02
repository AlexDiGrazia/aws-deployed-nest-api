import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world! Brand new text, deployed with GitHub Actions!!';
  }
}
