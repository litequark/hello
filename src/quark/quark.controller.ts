import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('quark')
export class QuarkController {
    @Get()
    quark(): string {
        return 'Quark, quark!';
    }
}
