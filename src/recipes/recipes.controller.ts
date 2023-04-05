import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { Recipe } from './schemas/recipe.schema';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  async findAll(): Promise<Recipe[]> {
    console.log(this.recipesService.findAll());
    return this.recipesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Recipe> {
    try {
      return await this.recipesService.findOne(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto): Promise<string> {
    return this.recipesService.create(createRecipeDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ): Promise<Recipe> {
    try {
      return await this.recipesService.update(id, updateRecipeDto);
    } catch {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    try {
      return await this.recipesService.delete(id);
    } catch {
      throw new NotFoundException();
    }
  }
}
