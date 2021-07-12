import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent implements OnInit {

  food = new FormControl();
  foodList: string[] = ['Yakitori', 'Onigiri', 'Crunchy rolls', 'Cheeseburger', 'Hamburger', 'Filet O Fish burger', 'Capricciosa', 'Margarita', 'Vegetariana'];

  res = new FormControl();
  resList: string[] = ['Fine Sushi', 'McDonalds', 'Big Pizza'];

  @Output() orderNew = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {console.log(form);}

  onNewOrder() {
    this.orderNew.emit();
  }

}
