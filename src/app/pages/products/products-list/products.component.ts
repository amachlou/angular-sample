import { Observable, of } from 'rxjs';
import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/interfaces/products';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  public products$: Observable<Product[] | undefined> = of(undefined)
  public products = signal<Product[]>([])
  public allProducts: Product[] = []

  constructor (private productService: ProductService,
               private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.productService.getAllProducts$().subscribe((data) => {
      this.allProducts = data
    })
  }

  showDetails (product: Product) {
    this.matDialog.open(
        ProductDetailsComponent,
        {
            panelClass: 'confirmation-dialog',
            width: '30%',
            data: {
                header: 'Product details',
                product: product,
            },
        }
    );
  }

  // dialog: null | undefined;

  editProduct(id: number) {
    const dialog = this.matDialog.open(EditProductComponent, 
      {
        width: '50%',
        data: this.allProducts.filter(p => p.id == id)
      })
    dialog.afterClosed().subscribe((product: Product) => {
      console.log(' Prod ------> ', product)
    })

  }

  saveProduct() {

  }

  deleteProduct(id: number) {
    // this.products.update(items => {
    //   return items.filter((item) => item.id !== id);
    // });
  }

}
