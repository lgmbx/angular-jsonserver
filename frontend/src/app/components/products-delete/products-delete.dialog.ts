import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';

export interface DataDialog {
  product: Product;
}

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.dialog.html',
  styleUrls: ['./products-delete.dialog.scss']
})
export class ProductsDeleteDialog implements OnInit {



  constructor(
    public dialogRef: MatDialogRef<ProductsDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog
  ) { }

  ngOnInit(): void {
    console.log(this.data.product.name)
  }



}
