import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],//書くことでNestのシステムがインスタンス化してくれる
  exports: [PrismaService]
})
export class PrismaModule {}
