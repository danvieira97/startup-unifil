import { IsNotEmpty } from 'class-validator';

export class CreateRestaurantDTO {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly email: string;
  @IsNotEmpty()
  readonly availableDays: number[];
  @IsNotEmpty()
  readonly availableTables: number;
  @IsNotEmpty()
  readonly password: string;
  @IsNotEmpty()
  readonly confirmPassword: string;
}
