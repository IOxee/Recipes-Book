import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsaRecipesPageRoutingModule } from './usa-recipes-routing.module';

import { UsaRecipesPage } from './usa-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsaRecipesPageRoutingModule
  ],
  declarations: [UsaRecipesPage]
})
export class UsaRecipesPageModule {}
