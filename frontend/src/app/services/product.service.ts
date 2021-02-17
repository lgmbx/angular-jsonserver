import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})

export class ProductService {

    baseUrl = 'http://localhost:3001/products';

    constructor(
        private http: HttpClient,
        private snackBack: MatSnackBar,

    ) { }

    showMessage(msg: string) {
        this.snackBack.open(msg, 'X', {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            duration: 5000
        });
    }

    create(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl, product);
    }

    getAll(): Observable<Product> {
        return this.http.get<Product>(this.baseUrl);
    }

    getById(id: string): Observable<Product> {
        const url = `${this.baseUrl}/${id}`
        return this.http.get<Product>(url);
    }

    updateById(product: Product): Observable<Product> {
        const url = `${this.baseUrl}/${product.id}`
        return this.http.put<Product>(url, product);
    }

    deleteById(id: string): Observable<Product> {
        const url = `${this.baseUrl}/${id}`
        return this.http.delete<Product>(url);
    }

}