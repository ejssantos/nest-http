import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): string {
    return '<h1>Servidor NestJS em execução.</h1>';
  }
}
