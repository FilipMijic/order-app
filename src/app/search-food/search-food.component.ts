import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Food } from '../search-food/food.model';
import { FoodService } from '../search-food/food.service';



@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {
  displayedColumns = ["foodtype", "foodname", "quantity", "price", "time", "rating"];
  foodSource = new MatTableDataSource<Food>();

@ViewChild(MatSort) sort: MatSort;

constructor(private foodService: FoodService) { }

ngOnInit() {
  this.foodSource.data = this.foodService.getFood();
}

ngAfterViewInit() {
  this.foodSource.sort = this.sort;
}

doFilter(filterValue: string) {
  this.foodSource.filter = filterValue.trim().toLowerCase();
}

}
