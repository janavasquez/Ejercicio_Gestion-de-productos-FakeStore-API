import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../interfaces/product.model';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterLink, RouterOutlet],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {

  product: Product[] = [];

  productForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    category: new FormControl('')
  });

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) return;
      this.httpClient.get<Product[]>('http://localhost:3000/product/' + id)
      .subscribe(product => this.product = product);
    });
  }
  save(): void {
    const product: Product = {
      id: this.productForm.get('id')?.value ?? 0,
      title: this.productForm.get('title')?.value ?? '',
      price: this.productForm.get('price')?.value ?? 0,
      description: this.productForm.get('description')?.value ?? '',
      category: this.productForm.get('category')?.value ?? '',
      image: ''
    };
    const url = 'http://localhost:3000/products';
        this.httpClient.post<Product>(url, product).subscribe(data => this.router.navigate(['/']));
  }

}
