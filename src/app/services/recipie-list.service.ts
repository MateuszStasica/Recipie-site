import { Injectable } from '@angular/core';
import { RecipieList, RecipieListItem } from '../shared/models/RecipieList';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class RecipieListService {
  private recipieList: RecipieList = new RecipieList();
  private recipieListSubject: BehaviorSubject<RecipieList> = new BehaviorSubject(this.recipieList);
  constructor() { }

  addToRecipieList(food:Food):void{
    let recipieListItem = this.recipieList.items
    .find(item => item.food.id == food.id)
    if(recipieListItem)
      return;

    this.recipieList.items.push(new RecipieListItem(food));
  }
}
