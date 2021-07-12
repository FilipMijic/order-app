import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeleteOrderComponent } from '../my-orders/delete-order/delete-order.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onDelete() {
    this.dialog.open(DeleteOrderComponent);
  }

}
