import { Component } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product: Product | undefined;

  loadProduct() {
    this.product = {
      id: 0,
      description: 'Example',
      category: 'Electrónica',
      price: 500,
      image: '',
      title: 'Tv Samsung'
    };
  }

}
