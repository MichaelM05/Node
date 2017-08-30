import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InventoryService } from './inventory.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Inventory } from './inventory';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [InventoryService]
})
export class InventoryDetail implements OnInit {

  title = "Add Product";
  form: FormGroup;
  inventory : Inventory[];
  isUpdate = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InventoryService,
    private fb: FormBuilder
  ) { this.createForm(); }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (!id) return;

    this.service.getInventoryById(id)
      .subscribe(
        r => this.inventory = r,
        er => console.log(er),
        () => {
          if(this.inventory.length > 0){
            this.isUpdate = true;
            this.form.patchValue({              
              id : this.inventory[0].id,
              producto : this.inventory[1].producto,
              existencia : this.inventory[2].existencia,
              precio : this.inventory[3].precio,
              proveedor : this.inventory[4].proveedor
            })
          }
        }
      )
    console.log(id);
  }


  createForm() {
    this.form = this.fb.group({
      id: '',
      producto: '',
      existencia: '',
      proveedor: '',
      precio: ''


    })
  }

  saveInventory(){
    if(this.isUpdate){
      console.log('actualiza');
      console.log(this.form.value);
      this.updateInventory(this.form.value);
    }else{
      console.log('actualiza');
      this.addInventory(this.form.value);
    }
  }

  addInventory(inventory: Inventory) {
    this.service.addInventory(inventory)
      .subscribe(
      r => console.log(r),
      er => console.log(er),
      () => console.log(this.form.value)
      )
  }


  updateInventory(inventory: Inventory){
    if(!inventory) return;
    this.service.udpateInventory(inventory)
    .subscribe(
      rt => console.log(rt),
      er => console.log(er),
      () => this.goList()
    )
  }

  goList(){
    let link = ['/inventory/list'];
    this.router.navigate(link);
  }

}
