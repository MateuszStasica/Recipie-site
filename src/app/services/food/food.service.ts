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
        cookTime:'60-80',
        imageUrl:'',
        favourite: false,
        stars:0,
      },
      {
        id:2,
        name:'shakshuka',
        recipie:'',
        cookTime:'15-20',
        imageUrl:'',
        favourite: false,
        stars:0,
      },
      {
        id:3,
        name:'spaghetti',
        recipie:'',
        cookTime:'40-50',
        imageUrl:'',
        favourite: false,
        stars:0,
      }
    ]
  }

}
