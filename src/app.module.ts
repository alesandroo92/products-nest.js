import { Module } from '@nestjs/common';
import { MongoModule } from './config/mongo.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongoModule],
})
export class AppModule {}
