import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateRestaurantDTO } from './dtos/create-restaurant.dto';
import { Restaurant } from './interfaces/restaurants.interface';
import { RestaurantsService } from './restaurants.service';
import { LoginRestaurantDTO } from './dtos/login-restaurant.dto';
import { UpdateRestaurantDTO } from './dtos/update-restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantService: RestaurantsService) {}

  @Post('loginRestaurant')
  async loginRestaurant(
    @Body() loginRestaurantDTO: LoginRestaurantDTO,
  ): Promise<Restaurant> {
    return await this.restaurantService.loginRestaurant(loginRestaurantDTO);
  }

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

  @Get('/:id')
  async getRestaurantByID(@Param('id') id: string): Promise<Restaurant> {
    return await this.restaurantService.getRestaurantByID(id);
  }

  @Patch('makeReservation/:id')
  async makeReservation(@Param('id') id: string): Promise<void> {
    return await this.restaurantService.makeReservation(id);
  }

  @Patch('updateRestaurant/:id')
  async updateRestaurant(
    @Param('id') id: string,
    @Body() updateRestaurantDTO: UpdateRestaurantDTO,
  ): Promise<Restaurant> {
    return await this.restaurantService.updateRestaurant(
      id,
      updateRestaurantDTO,
    );
  }
}
