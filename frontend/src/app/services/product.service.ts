import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductById(id: Number | string): Observable<Product> {
    return this.httpClient.get<Product>('https://fakestoreapi.com/products/' + id);
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>('https://fakestoreapi.com/products', product);
  }

  updateProduct(id: number | string, product: Product): Observable<Product> {
    return this.httpClient.put<Product>('https://fakestoreapi.com/products/' + id, product);
  }

  deleteById(id: number | string) {
    return this.httpClient.delete('https://fakestoreapi.com/products/' + id);
  }

}
