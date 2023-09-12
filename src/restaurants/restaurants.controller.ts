import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateRestaurantDTO } from './dtos/create-restaurant.dto';
import { Restaurant } from './interfaces/restaurants.interface';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantService: RestaurantsService) {}

  @Post('createRestaurant')
  async createRestaurant(
    @Body() createRestaurantDTO: CreateRestaurantDTO,
  ): Promise<Restaurant> {
    return await this.restaurantService.createRestaurant(createRestaurantDTO);
  }

  @Get('getAllRestaurants')
  async getAllRestaurants(): Promise<Restaurant[]> {
    return await this.restaurantService.getAllRestaurants();
  }

  @Patch('makeReservation/:id')
  async makeReservation(@Param('id') id: string): Promise<void> {
    return await this.restaurantService.makeReservation(id);
  }
}
