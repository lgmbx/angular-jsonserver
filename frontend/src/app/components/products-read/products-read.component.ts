import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductsDeleteDialog } from '../products-delete/products-delete.dialog';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.scss']
})
export class ProductsReadComponent implements OnInit {

  data: any;
  columnsToDisplay = ['name', 'price', 'actions'];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.productService.getAll().subscribe(x => {
      this.data = x;
      console.log(x);
    })
  }

  teste(product: Product) {
    const dialogRef = this.dialog.open(ProductsDeleteDialog, {
      width: '350px',
      data: { product: product }
    });

    dialogRef.afterClosed().subscribe(bool => {
      if (bool && product.id) {
        this.productService.deleteById(product.id.toString()).subscribe(() => {
          this.productService.showMessage('Product deleted!');
          this.ngOnInit();
        });
      }
    });
  }

}
