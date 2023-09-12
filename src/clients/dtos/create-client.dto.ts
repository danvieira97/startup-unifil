import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateClientDTO {
  @IsNotEmpty()
  readonly name: string;
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  readonly celphone: string;
  @IsNotEmpty()
  readonly password: string;
  @IsNotEmpty()
  readonly confirmPassword: string;
}
