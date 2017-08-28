import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryDetail implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      let id = this.route.snapshot.params['id'];
      if(!id) return;

      console.log(id);
  }

}
