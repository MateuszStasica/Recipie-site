import { Food } from '../app/shared/models/Food';

export const sample_foods: Food[] = [
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