import { Component, OnInit } from '@angular/core';
import { Inventory } from './inventory';
import { InventoryService } from './inventory.service';
import { HttpModule } from '@angular/http';
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [InventoryService]
})
export class InventoryList implements OnInit {

  list: Inventory[]

  constructor(
    private service : InventoryService
  ) { }

  ngOnInit() {

   
    this.service.getInventory()
        .subscribe(
          rs => this.list = rs,
          er => console.log(er),
          () => console.log(this.list)
        ) 
    
  }

}
