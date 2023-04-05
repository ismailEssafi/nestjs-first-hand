import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './schemas/recipe.schema';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(@InjectModel(Recipe.name) private RecipeModel: Model<Recipe>) {}

  async findAll(): Promise<Recipe[]> {
    return await this.RecipeModel.find();
  }

  async findOne(id: string): Promise<Recipe> {
    const result = await this.RecipeModel.findById(id).exec();
    return result;
  }

  async create(createRecipeDto: CreateRecipeDto): Promise<string> {
    const result = await this.RecipeModel.create(createRecipeDto);
    if (result) return 'Recipe created with success';
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    const result = await this.RecipeModel.findOneAndUpdate(
      { _id: id },
      updateRecipeDto,
      { new: true },
    );
    return result;
  }

  async delete(id: string): Promise<string> {
    await this.RecipeModel.deleteOne({ _id: id });
    return 'delete with success';
  }
}
