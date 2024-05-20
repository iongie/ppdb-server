import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CekApiService {
    getIpAddress(request: Request): string {
        return request.ip;
    }
}
