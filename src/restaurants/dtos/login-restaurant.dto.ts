import { IsNotEmpty } from 'class-validator';

export class LoginRestaurantDTO {
  @IsNotEmpty()
  readonly email: string;
  @IsNotEmpty()
  readonly password: string;
}
