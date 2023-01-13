import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DetailsModule {
    id: number = 0;
    name: string = '';
    description: string = '';
    image: string = '';
    ingredients: Array<string> = [];
    instructions: Array<string> = [];
}
