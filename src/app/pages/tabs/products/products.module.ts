import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsPage,
    children: [
      {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/pages/tabs/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'tabnav',
    loadChildren: () => import('src/app/pages/tabs/tabnav/tabnav.module').then( m => m.TabnavPageModule)
  },
  {
    path: '',
    redirectTo: '/products',
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
