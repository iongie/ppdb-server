import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CekApiModule } from './cek-api/cek-api.module';
import { AppRoutingModule } from './app-router.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AppRoutingModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'browser'),
      exclude: ['/api/(.*)'],
    }),
    CekApiModule,
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
