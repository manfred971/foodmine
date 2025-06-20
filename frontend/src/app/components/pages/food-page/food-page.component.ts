import { Component ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute ,Router,RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, RatingModule, RouterLink, NotFoundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!: Food;
constructor(activatedRoute: ActivatedRoute, private foodService: FoodService
  ,private cartService: CartService , private router :Router) {
  activatedRoute.params.subscribe( (params) => {
    if (params.id) {
      this.food = this.foodService.getFoodById(params.id);
    }
  }
 )} 
 addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page');
}

}
