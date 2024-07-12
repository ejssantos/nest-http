import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInfo(): string {
    return this.appService.getInfo();
  }

  @Get('dbdoc')
  serveProject1Index(@Res() res: Response) {
    const filePath = 'D:/ejss/docs/dbdoc/mvdb/index.html';
    res.sendFile(filePath);
  }


  @Get('project2')
  serveProject2Index(@Res() res: Response) {
    res.sendFile(
      join(__dirname, '..', 'path/to/your/second/html/project', 'index.html'),
    );
  }
}
