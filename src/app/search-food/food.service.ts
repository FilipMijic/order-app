import { Food } from "../search-food/food.model";

export class FoodService {
    private foods: Food [] = [
        { foodtype: 'sushi', foodname: 'Onigiri', quantity: 3, time: 15, price: 450, rating: 4 },
        { foodtype: 'sushi', foodname: 'Yakitori', quantity: 2, time: 15, price: 330, rating: 5 },
        { foodtype: 'sushi', foodname: 'Crunchy rolls', quantity: 8, time: 15, price: 610, rating: 4 },
        { foodtype: 'burger', foodname: 'Cheeseburger', quantity: 1, time: 35, price: 180, rating: 5 },
        { foodtype: 'burger', foodname: 'Hamburger', quantity: 1, time: 35, price: 160, rating: 4 },
        { foodtype: 'burger', foodname: 'Filet O Fish burger', quantity: 1, time: 35, price: 380, rating: 2 },
        { foodtype: 'pizza', foodname: 'Capricciosa', quantity: 1, time: 5, price: 540, rating: 5 },
        { foodtype: 'pizza', foodname: 'Margarita', quantity: 1, time: 5, price: 500, rating: 3 },
        { foodtype: 'pizza', foodname: 'Vegetariana', quantity: 1, time: 5, price: 500, rating: 1 },
    ]

    getFood() {
        return this.foods;
    }
}   