import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Product } from 'src/app/interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_LINK: string = '/assets/mocks/products.json'

  constructor(private http: HttpClient) { }

  public getAllProducts$() {
    return this.http.get<Product[]>(this.BASE_LINK).pipe(delay(1000));
  }

  // public addProduct(product: Product) {
  //   this.http.post<Product>(this.BASE_LINK, product)
  // }

}
