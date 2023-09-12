import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRestaurantDTO } from './dtos/create-restaurant.dto';
import { Restaurant } from './interfaces/restaurants.interface';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel('Restaurant')
    private readonly restaurantModel: Model<Restaurant>,
  ) {}

  async createRestaurant(
    createRestaurantDTO: CreateRestaurantDTO,
  ): Promise<Restaurant> {
    const createRestaurant = new this.restaurantModel(createRestaurantDTO);
    return await createRestaurant.save();
  }

  async getAllRestaurants(): Promise<Restaurant[]> {
    return await this.restaurantModel.find();
  }

  async makeReservation(id: string): Promise<any> {
    const findRestaurant = await this.restaurantModel.findById(id);
    if (!findRestaurant) {
      throw new BadRequestException(`Restaurante com ${id} não encontrado!`);
    }
    const availableTables = findRestaurant.availableTables - 1;
    await this.restaurantModel.findByIdAndUpdate(id, {
      availableTables: availableTables,
    });
  }
}
