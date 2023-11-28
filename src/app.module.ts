import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './clients/clients.module';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://daaaands:K5MvuE0JRNYhJuIL@cluster0.mzelhe5.mongodb.net/startup-unifil?retryWrites=true&w=majority',
      // 'mongodb://daaaands:K5MvuE0JRNYhJuIL@db:27017/startup-unifil?authSource=admin',
    ),
    ClientsModule,
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
