import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRestaurantDTO } from './dtos/create-restaurant.dto';
import { Restaurant } from './interfaces/restaurants.interface';
import { LoginRestaurantDTO } from './dtos/login-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel('Restaurant')
    private readonly restaurantModel: Model<Restaurant>,
  ) {}

  async createRestaurant(
    createRestaurantDTO: CreateRestaurantDTO,
  ): Promise<Restaurant> {
    const { email } = createRestaurantDTO;

    const findRestaurant = await this.restaurantModel.findOne({ email });
    if (findRestaurant) {
      throw new BadRequestException(
        `Restaurante com o e-mail: ${email} já cadastrado`,
      );
    }

    const { password, confirmPassword } = createRestaurantDTO;
    if (password !== confirmPassword) {
      throw new BadRequestException(
        `A senha e confirmação de senha precisam ser iguais`,
      );
    }

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

  async loginRestaurant(
    loginRestaurantDTO: LoginRestaurantDTO,
  ): Promise<Restaurant> {
    const findRestaurant = await this.restaurantModel.findOne({
      email: loginRestaurantDTO.email,
    });

    if (!findRestaurant) {
      throw new BadRequestException('Email ou senha inválidos!');
    }

    if (findRestaurant.password !== loginRestaurantDTO.password) {
      throw new BadRequestException('Email ou senha inválidos!');
    }

    return findRestaurant;
  }
}
