import { Order } from "./order.model";

export class OrderService {
    private orders: Order [] = [
        { foodname: 'Yakitori', desc: '130 grams. Japanese chicken kabob 2 pieces', quantity: 2, time: 45, resname: 'Fine Sushi', address: 'Hadzi Djerina 28', status: 'completed' },
        { foodname: 'Capricciosa', desc: 'Peeled tomato, cheese, ham, mushrooms.', quantity: 1, time: 5, resname: 'Big Pizza', address: 'Autokomanda', status: 'in progress' },
    ]

    getOrder() {
        return this.orders;
    }
}   