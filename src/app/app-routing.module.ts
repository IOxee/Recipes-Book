import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'spanish-recipes',
    loadChildren: () => import('./pages/recipes/spanish-recipes/spanish-recipes.module').then( m => m.SpanishRecipesPageModule)
  },
  {
    path: 'usa-recipes',
    loadChildren: () => import('./pages/recipes/usa-recipes/usa-recipes.module').then( m => m.UsaRecipesPageModule)
  },
  {
    path: 'tabnav',
    loadChildren: () => import('./pages/tabs/tabnav/tabnav.module').then( m => m.TabnavPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/tabs/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/tabs/products/products.module').then( m => m.ProductsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
