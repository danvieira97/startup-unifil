import { IsNotEmpty } from 'class-validator';

export class UpdateRestaurantDTO {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly availableTables: number;
}
