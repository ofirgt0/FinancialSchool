import { Component, OnInit } from '@angular/core';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { Product } from 'src/entities.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private backend: FinancialSchoolBackendAccessService) {}

  product: Product = {
    description: '',
    id: 0,
    price: 0,
    title: '',
  };

  products: Product[] = [];

  ngOnInit(): void {
    this.backend.getProducts().subscribe((products) => {
      let resJSON = JSON.parse(JSON.stringify(products)).result;
      console.log(resJSON);
      resJSON.forEach((product: Product) => {
        this.products.push(product);
      });
    });
  }

  onNewProduct() {
    this.product.id =  29; //+(new Date());
    console.log(this.product.id);
    this.backend
      .insertProducts(this.product)
      .subscribe((res) => console.log(res));
  }
}
