import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { Class, Product } from 'src/entities.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private backend: FinancialSchoolBackendAccessService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  product: Product = {
    description: '',
    id: 0,
    price: 0,
    title: '',
  };

  products: Product[] = [];
  isLoggedIn$!: Observable<boolean>;
  teachersClass!: Class;

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.backend.getClassById(localStorage.getItem('TeachersClass')!).subscribe((classRes) => {
      this.teachersClass = classRes;
    });

    this.backend.getProducts().subscribe((products) => {
      let resJSON = JSON.parse(JSON.stringify(products)).result;
      resJSON.forEach((product: Product) => {
        this.products.push(product);
      });
    });
  }

  onNewProduct() {
    this.product.id = 29; //+(new Date());
    console.log(this.product.id);
    this.backend
      .insertProducts(this.product)
      .subscribe((res) => console.log(res));
  }

  buyProduct(productId: number)
  {
    this.backend.buyProduct(this.authService.loginTeacher.class, productId).subscribe(()=>{
      this.toastr.success("הרכישה התבצעה בהצלחה");
    }, e =>{
      this.toastr.success("התרחשה שגיאה בעת נסיון הרכישה");
    });
  }
}
