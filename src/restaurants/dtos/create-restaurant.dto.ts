import { IsNotEmpty } from 'class-validator';

export class CreateRestaurantDTO {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly availableDays: number[];
  @IsNotEmpty()
  readonly availableTables: number;
}
