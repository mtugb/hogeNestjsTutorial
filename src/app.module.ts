import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HogeModule } from './hoge/hoge.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [HogeModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
