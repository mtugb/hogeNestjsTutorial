import { Controller, Get, Param, Query } from '@nestjs/common';
import { HogeService } from './hoge.service';

@Controller('hoge')
export class HogeController {
    constructor(private hogeService: HogeService) { }
    @Get('echo')
    echoHoge() {
        return 'hoge';
    }

    @Get('list')
    async showAllHoge() {
        return {
            entries: await this.hogeService.getAllHoges()
        }
    }

    @Get('create')
    async createHoge(@Query('title') title: string) {
        await this.hogeService.createHoge(title);
        return {
            successful: true
        }
    }
}
