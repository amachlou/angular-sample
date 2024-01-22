import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  title!: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    this.title = this.data.header;
    this.product = this.data.product;
  }

}
