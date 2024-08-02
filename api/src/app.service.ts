import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world! this text is going to be updated with github actions! yay';
  }
}
