import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './modules/search/search.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [SearchModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
