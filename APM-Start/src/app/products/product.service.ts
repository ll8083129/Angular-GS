import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, filter, map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root' 
})
export class ProductService{
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data=>console.log(data)),
          catchError(this.handleError)
        );
    }

    getProduct(id): Observable<IProduct> {
      return this.getProducts()
        .pipe(
          map((products: IProduct[]) => products.find(p => p.productId === id))
        );
    }
  handleError(err: HttpErrorResponse){
    let errorMessage = '';

    if (err.error instanceof ErrorEvent)
    {
      errorMessage = 'blad';
    } else {
      errorMessage = 'innyblad';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {
      
    }
}
