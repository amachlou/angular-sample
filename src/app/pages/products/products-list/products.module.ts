import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CurrencySigneDirective } from 'src/app/directives/currency-signe.directive';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CurrencySigneDirective,
    MatDialogModule
  ]
})
export class ProductsModule { }
