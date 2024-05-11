import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { ProductService } from '../services/product.service';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet, HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
    this.httpClient.get<Product[]>('http://localhost:3000/product')
    .subscribe(product => this.products = product)
  }

  crearProducto(): void {
    const tvSamsung: Product = {
      id: 1,
      description: 'Example',
      category: 'Electrónica',
      price: 500,
      image: '',
      title: 'Tv Samsung'
    };
    this.productService.createProduct(tvSamsung).subscribe(p => console.log(p));
  }
  actualizarProducto() {
    const tvSamsung: Product = {
      id: 1,
      description: 'Example modificado',
      category: 'Electrónica',
      price: 500,
      image: '',
      title: 'Tv Samsung'
    };
    this.productService.updateProduct(1, tvSamsung).subscribe(p => console.log(p));
  }
  borrarProducto() {
    this.productService.deleteById(10).subscribe(p => console.log(p));
  }

}
