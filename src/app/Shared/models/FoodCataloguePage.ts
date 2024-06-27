import { FoodItem } from "./FoodItems";
import { Restaurant } from "./Restaurants";

export interface FoodCataloguePage{
    foodItemsList:FoodItem[];
    restaurant:Restaurant;
}