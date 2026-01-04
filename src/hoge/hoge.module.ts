import { Module } from '@nestjs/common';
import { HogeController } from './hoge.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { HogeService } from './hoge.service';

@Module({
    controllers: [HogeController],
    imports: [PrismaService],
    providers: [HogeService]
})
export class HogeModule {}
