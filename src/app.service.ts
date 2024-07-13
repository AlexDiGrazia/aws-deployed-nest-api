import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello world! This week's deployment includes a Postgres Database! Yay!";
  }
}
