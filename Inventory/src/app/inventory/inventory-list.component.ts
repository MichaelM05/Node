import { Component, OnInit } from '@angular/core';
import { Inventory } from './inventory';
import { InventoryService } from './inventory.service';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [InventoryService]
})
export class InventoryList implements OnInit {

  list: Inventory[]

  constructor(
    private service: InventoryService,
    private router: Router
  ) { }

  ngOnInit() {


    this.service.getInventory()
      .subscribe(
      rs => this.list = rs,
      er => console.log(er),
      () => console.log(this.list)
      )

  }


  select(item: Inventory) {

    let link = ['/inventory/detail', item.id];
    this.router.navigate(link);

  }
  update(item: Inventory) {

    let link = ['/inventory/detail', item.id];
    this.router.navigate(link);

  }


}
