import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {RatingModule } from 'primeng/rating';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";
import { NotFoundComponent } from "../../partials/not-found/not-found.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, RatingModule, SearchComponent, TagsComponent, NotFoundComponent],//fixed here
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[] = [];
  constructor(private foodService:FoodService ,  activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) 
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
       else 
      this.foods = foodService.getAll();
    })
    
  }

}
