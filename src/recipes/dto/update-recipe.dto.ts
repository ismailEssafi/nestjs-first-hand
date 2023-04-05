import { Length, IsString, IsOptional } from 'class-validator';

export class UpdateRecipeDto {
  @IsOptional()
  @IsString()
  @Length(3)
  name: string;

  @IsOptional()
  @IsString()
  @Length(8)
  description: string;
}