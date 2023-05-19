export class Food{
    id!:number;
    name!:string;
    recipie!:string;
    cookTime!:string;
    imageUrl!:string;
    favourite:boolean = false;
    stars:number = 0;
    tags?:string[];
}