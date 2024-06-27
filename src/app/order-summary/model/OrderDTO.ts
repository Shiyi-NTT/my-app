import { FoodItem } from "../../Shared/models/FoodItems";
import { Restaurant } from "../../Shared/models/Restaurants";

export interface OrderDTO{

    foodItemsList?: FoodItem[];
    userId?: number;
    restaurant?: Restaurant;
}