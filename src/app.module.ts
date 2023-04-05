import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    RecipesModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestjs-first'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
