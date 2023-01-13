import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpanishRecipesPage } from './spanish-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: SpanishRecipesPage
  },
  {
    path: 'details/:idx',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpanishRecipesPageRoutingModule {}
