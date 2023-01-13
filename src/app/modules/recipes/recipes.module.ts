import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RecipesModule {
    id: number = 0;
    name: string = '';
    description: string = '';
    image: string = '';
}
