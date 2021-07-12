import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteOrderComponent } from '../my-orders/delete-order/delete-order.component';
import { RateOrderComponent } from '../my-orders/rate-order/rate-order.component';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onDelete() {
    this.dialog.open(DeleteOrderComponent);
  }

  onRate() {
    this.dialog.open(RateOrderComponent);
  }

}
