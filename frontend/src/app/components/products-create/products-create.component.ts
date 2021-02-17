import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {

  blockCreateButton: boolean = false;

  product: Product = {
    name: '',
    price: ''
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct() {
    this.blockCreateButton = this.validateInputs();

    if (this.blockCreateButton) {
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage("Product created!");
        this.returnToProducts();
      });
    } else {
      this.productService.showMessage("Invalid name or price");
    }
  }

  validateInputs() {
    this.product.name.trim();
    if (this.product.name && this.product.price) {
      return true;
    } else {
      return false;
    }
  }

  returnToProducts() {
    this.router.navigateByUrl('/products');
  }
}
