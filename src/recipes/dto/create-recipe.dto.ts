import { Length, IsString } from 'class-validator';
export class CreateRecipeDto {

  @IsString()
  @Length(3)
  name: string;

  @IsString()
  @Length(8)
  description: string;
}