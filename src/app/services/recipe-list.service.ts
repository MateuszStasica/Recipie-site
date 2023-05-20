import { Injectable } from '@angular/core';
import { RecipeList, RecipeListItem } from '../shared/models/RecipeList';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  private recipeList: RecipeList = this.getRecipeListFromLocalStorage();
  private recipeListSubject: BehaviorSubject<RecipeList> = new BehaviorSubject(this.recipeList);
  constructor() { }

  addToRecipeList(food:Food):void{
    let recipeListItem = this.recipeList.items
    .find(item => item.food.id === food.id);
    if(recipeListItem)
      return;

    this.recipeList.items.push(new RecipeListItem(food));
  }
  
  deleteRecipeFromList(foodId: string): void {
    this.recipeList.items = this.recipeList.items
      .filter(item => item.food.id !== parseInt(foodId));
  }

  getRecipeListObservable(): Observable<RecipeList>{
    return this.recipeListSubject.asObservable();
  }

  private setRecipeListToLocalStorage(): void{
    this.recipeList.totalCount = this.recipeList.items
    .reduce((prevSum, currentItem) => currentItem.quantity, 0);
    const recipeListJson = JSON.stringify(this.recipeList);
    localStorage.setItem('RecipeList', recipeListJson);
    this.recipeListSubject.next(this.recipeList);
  }

  private getRecipeListFromLocalStorage():RecipeList{
    const recipeListJson = localStorage.getItem('RecipeList');
    return recipeListJson? JSON.parse(recipeListJson): new RecipeList();
  }
}
