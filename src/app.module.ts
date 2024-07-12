import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot(
      {
        rootPath: 'D:/ejss/docs/dbdoc/mvdb',
        serveRoot: '/dbdoc', // Serve files under this path
      },
      {
        rootPath: join(__dirname, '..', 'path/to/your/second/html/project'),
        serveRoot: '/project2', // Serve files under this path
      },
      // Add more projects as needed
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
