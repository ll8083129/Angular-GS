import { Component, OnInit, OnChanges } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({ 
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  
  imageWidth: number = 100;
  product: IProduct;
  errorMessage: string;
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  onBack(): void {
    this.router.navigate(['/products']);
  }
  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }
}