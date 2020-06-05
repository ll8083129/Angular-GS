import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImages: boolean = false;
    errorMessage: string;
    _listFilter: string;
    public get listFilter() : string {
      return this._listFilter;
    }
    
    public set listFilter(value : string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    filteredProducts = [];

    products: IProduct[] = [];


      constructor(private productService: ProductService, private route: ActivatedRoute) {
        
      }
      toggleImages(): void {
        this.showImages = !this.showImages;
      };
      ngOnInit(): void {  
        console.log("init");
        this.productService.getProducts().subscribe({
          next: products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
          error: err => this.errorMessage = err
        });
        
      };
      performFilter(filterBy: string): any[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      };
      onRatingClicked(event) : void {
        this.pageTitle = event;
      };
}