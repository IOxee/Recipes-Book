import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpanishRecipesPageRoutingModule } from './spanish-recipes-routing.module';

import { SpanishRecipesPage } from './spanish-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpanishRecipesPageRoutingModule
  ],
  declarations: [SpanishRecipesPage]
})
export class SpanishRecipesPageModule {}
