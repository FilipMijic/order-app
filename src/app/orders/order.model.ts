export interface Order {
    foodname: string;
    desc: string;
    quantity: number;
    time: number;
    resname: string;
    address: string;
    status: 'completed' | 'in progress' | 'cancelled';
}