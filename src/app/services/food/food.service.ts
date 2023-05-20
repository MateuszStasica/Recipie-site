import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAll():Food[]{
    return[
      {
        id:1,
        name:'Lasagne',
        ingredients:['a','b','c'],
        recipie:'bla bla bla',
        cookTime:'60-80 min',
        imageUrl:'/assets/images/foods/food1.jpg',
        favourite: false,
      },
      {
        id:2,
        name:'Shakshuka',
        ingredients:[],
        recipie:'',
        cookTime:'15-20 min',
        imageUrl:'/assets/images/foods/food2.jpg',
        favourite: false,
      },
      {
        id:3,
        name:'Spaghetti bolognese',
        ingredients:[],
        recipie:'',
        cookTime:'40-50 min',
        imageUrl:'/assets/images/foods/food3.jpg',
        favourite: false,
      }
    ]
  }

}
