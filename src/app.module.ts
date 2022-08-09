import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './config/mongo.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
