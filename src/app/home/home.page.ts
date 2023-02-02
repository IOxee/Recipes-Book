import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


    categories: any;
    constructor(private categoriesService: CategoriesService) { }
    ngOnInit() {
        this.categoriesService.getCategories().subscribe(data => {
            this.categories = data['categories'];
        });
    }
}
