import { Injectable } from '@nestjs/common';
import { GetHelloResponse } from './app.controller';

@Injectable()
export class AppService {
  getHello(): GetHelloResponse {
    return { message: 'Hello NestJS!!!!' };
  }
}
