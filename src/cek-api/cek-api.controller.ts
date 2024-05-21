import { Controller, Get, Req } from '@nestjs/common';
import { CekApiService } from './cek-api.service';

@Controller('cek-ip')
export class CekApiController {
    constructor(
        private cekApi: CekApiService
    ) { }

    @Get()
    async getCekIP() {
        try {
            const ipAddress = await this.cekApi.getIpAddress();
            return {
                success: 'ok',
                data: {
                    ip: JSON.parse(ipAddress.toString())
                }
            }
        } catch (error) {
            return {
                success: 'error',
                message: error.message
            }
        }
    }
}
