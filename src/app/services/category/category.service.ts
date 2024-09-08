import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  apiUrl='https://localhost:44374/api/Books'
  httplient=inject(HttpClient)

  getCategories(): Observable<Category[]> 
  {
    return this.httplient.get<Category[]>(`${this.apiUrl}/category/1?PageNumber=1&PageSize=1`);
  }
}