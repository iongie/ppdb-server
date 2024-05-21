import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import * as fs from 'fs';
import { promisify } from 'util';

@Injectable()
export class CekApiService {
    readFileAsync = promisify(fs.readFile);

    async getIpAddress() {
        try {
            return await this.readFileAsync(`./ip/ip.json`) 
        } catch (error) {
            return error   
        }
    }
}
