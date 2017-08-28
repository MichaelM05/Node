import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ClientComponent } from './client/client.component';
import { InventoryList } from './inventory/inventory-list.component';
import { InventoryDetail } from './inventory/inventory-detail.component';
const appRoutes : Routes = [
    
    {path: 'home', component: HomeComponent },
    {path: 'contact', component: ContactComponent },
    {path: 'inventory', component: InventoryComponent, children: [
        {path: '', redirectTo: 'list', pathMatch: 'full' },
        {path: 'list', component: InventoryList },
        {path: 'detail', component: InventoryDetail },

]  },
    {path: 'client', component: ClientComponent },

]

@NgModule ({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }