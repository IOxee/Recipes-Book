import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Details } from '../model/details';
import { Recipes } from '../model/recipes';




@Injectable({
	providedIn: 'root'
})

export class RecipesService {
	ddData: Details[] = [];
	retriveRecipesArr: Recipes[] = [];

	constructor(private http: HttpClient) { }

	// , private deatils: Details

	getRecipes(): Recipes[] {
		return this.retriveRecipesArr;
	}

	retriveRecipes(lang: string) {
		return this.http.get('assets/data/recipes.json').subscribe((data: any) => {
			this.retriveRecipesArr = data[lang];
		});
	}

	getRecipesByID(id: any, lang: string): Recipes | null {
		for (let i = 0; i < this.retriveRecipesArr.length; i++) {
			if (this.retriveRecipesArr[i].id === id) {
				return this.retriveRecipesArr[i];
			}
		}
		return null;
	}

	getDetailsData() {
		console.log(this.ddData);
		return this.ddData;
	}
}

/*

*/
