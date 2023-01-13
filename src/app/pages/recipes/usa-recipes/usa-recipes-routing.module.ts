import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsaRecipesPage } from './usa-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: UsaRecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsaRecipesPageRoutingModule {}
