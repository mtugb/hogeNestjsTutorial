import { Module } from '@nestjs/common';
import { HogeController } from './hoge.controller';
import { HogeService } from './hoge.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    controllers: [HogeController],
    imports: [PrismaModule],
    providers: [HogeService]
})
export class HogeModule {}
