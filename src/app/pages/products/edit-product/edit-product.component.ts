import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product | undefined

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(){
    this.product = this.data.product
    console.log(' ---> ', this.product)
  }

}
