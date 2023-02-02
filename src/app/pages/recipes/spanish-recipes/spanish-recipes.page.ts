import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipes } from 'src/app/model/recipes';

@Component({
    selector: 'app-spanish-recipes',
    templateUrl: './spanish-recipes.page.html',
    styleUrls: ['./spanish-recipes.page.scss'],
})

export class SpanishRecipesPage implements OnInit {
    constructor(private RecipesService: RecipesService) {}

    ngOnInit() {
      this.RecipesService.retriveRecipes('spanish');
    }

    get recipes(): Recipes[] {
      return this.RecipesService.getRecipes();
    }
}
