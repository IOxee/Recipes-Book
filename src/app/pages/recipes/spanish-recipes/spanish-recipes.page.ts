import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
    selector: 'app-spanish-recipes',
    templateUrl: './spanish-recipes.page.html',
    styleUrls: ['./spanish-recipes.page.scss'],
})

export class SpanishRecipesPage implements OnInit {
    recipes: any;

    constructor(private RecipesService: RecipesService) { }

    ngOnInit() {
        this.RecipesService.getRecipes().subscribe(data => {
            this.recipes = data['spanish'];
        });
    }
}
