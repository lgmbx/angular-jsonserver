import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.scss']
})
export class ProductsUpdateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  product: Product = {
    'id': undefined,
    'name': '',
    'price': ''
  }



  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getById(id).subscribe(p => {
        this.product.id = p.id;
        this.product.name = p.name;
        this.product.price = p.price;
      });
    } else {
      this.productService.showMessage('ID NOT FOUND');
      this.router.navigateByUrl('/products');
    }
  }


  updateProduct() {
    this.productService.updateById(this.product).subscribe(r => {
      if (r) {
        this.productService.showMessage('Product updated!');
      } else {
        this.productService.showMessage('ERROR!!');
      }
      this.router.navigateByUrl('/products');
    });
  }

  returnToProducts() {
    this.router.navigateByUrl('/products');
  }
}
