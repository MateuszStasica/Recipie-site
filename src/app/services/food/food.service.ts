import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return[
      {
        id:1,
        name:'lasagne',
        recipie:'',
        cookTime:'60-80 min',
        imageUrl:'/assets/images/foods/food1.jpg',
        favourite: false,
      },
      {
        id:2,
        name:'shakshuka',
        recipie:'',
        cookTime:'15-20 min',
        imageUrl:'/assets/images/foods/food2.jpg',
        favourite: false,
      },
      {
        id:3,
        name:'spaghetti bolognese',
        recipie:'',
        cookTime:'40-50 min',
        imageUrl:'/assets/images/foods/food3.jpg',
        favourite: false,
      }
    ]
  }

}
