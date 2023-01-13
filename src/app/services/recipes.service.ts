import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    constructor(private http: HttpClient) { }

    getRecipes(): Observable<any> {
        return this.http.get('assets/data/recipes.json');
    }

    getRecipesByID(id: any) {
        return this.http.get('assets/data/recipes.json').pipe(map((data: any) => {
            return data.spanish[id];
        }));
    }
}

