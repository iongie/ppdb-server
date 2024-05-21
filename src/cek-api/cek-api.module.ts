import { Module } from '@nestjs/common';
import { CekApiController } from './cek-api.controller';
import { CekApiService } from './cek-api.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [CekApiController],
  providers: [CekApiService],
  imports: [ConfigModule]
})
export class CekApiModule {}
