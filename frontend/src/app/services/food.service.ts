import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/Tag';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FOOD_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }
  getAllFoodsBySearchTerm(searchTerm: string): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }
  getAllFoodsByTag(tag: string): Observable<Food[]>{
     return  this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }
  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
}
