import { Injectable } from '@angular/core';
import { RecipeList, RecipeListItem } from '../shared/models/RecipeList';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  private recipeList: RecipeList = new RecipeList();
  private recipeListSubject: BehaviorSubject<RecipeList> = new BehaviorSubject(this.recipeList);
  constructor() { }

  addToRecipeList(food:Food):void{
    let recipeListItem = this.recipeList.items
    .find(item => item.food.id == food.id)
    if(recipeListItem)
      return;

    this.recipeList.items.push(new RecipeListItem(food));
  }


}
