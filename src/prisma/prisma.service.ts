import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const url = process.env.DATABASE_URL!;
        if (!url) {
            throw new Error('DATABASE_URL is not defined in .env');
        }
        console.info(`This is Connection "${url}"`);
        const pool = new PrismaPg({ connectionString: url });
        super({ adapter: pool });
    }
    async onModuleInit() {
        // await this.$connect();
    }
}
