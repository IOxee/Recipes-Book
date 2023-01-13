import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    public id = 0;
    public recipes: any;
    public auxArr: any;
    public slideOpts = {
        initialSlide: 0,
        speed: 400,
        autoplay: true
    };

    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('idx');
        this.RecipesService.getRecipesByID(id).subscribe(data => {
            this.recipes = (data as any);
            console.log(this.recipes.title);
        });
    }


    constructor(private RecipesService: RecipesService, private activatedRoute: ActivatedRoute, private modalCtrl: ModalController) {}


    async cancel() {
		await this.modalCtrl.dismiss();
	}

}
