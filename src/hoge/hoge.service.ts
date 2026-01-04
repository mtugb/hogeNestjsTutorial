import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HogeService {
    constructor(private prisma: PrismaService){}
    async getAllHoges() {
        return await this.prisma.hogeTable.findMany();
    }
    async createHoge(title: string) {
        await this.prisma.hogeTable.create({
            "data": {
                "title": title
            }
        })
    }

}
