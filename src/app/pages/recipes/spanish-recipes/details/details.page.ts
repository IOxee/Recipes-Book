import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { Recipes } from 'src/app/model/recipes';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    public id = 0;
    public recipes: Recipes = new Recipes(0, '', '', '', '', [], [], []);
    public auxArr: any;
    public slideOpts = {
        initialSlide: 0,
        speed: 400,
        autoplay: true
    };

    ngOnInit() {
    }


    constructor(private RecipesService: RecipesService, private activatedRoute: ActivatedRoute, private modalCtrl: ModalController) {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['idx'];
        this.recipes = this.RecipesService.getRecipesByID(this.id, 'spanish') as Recipes;
      });
    }

    get a(): Recipes {
      return this.recipes;
    }


    async cancel() {
		await this.modalCtrl.dismiss();
	}

}
