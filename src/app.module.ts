import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuarkController } from './quark/quark.controller';

@Module({
  imports: [],
  controllers: [AppController, QuarkController],
  providers: [AppService],
})
export class AppModule {}
