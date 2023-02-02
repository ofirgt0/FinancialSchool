import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RoundBigNumbersPipe } from './Pipes/RoundBigNumbers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { ChartComponent } from './components/home/chart/chart.component';
import { NgbToastModule } from 'ngb-toast';
import { ToastrModule } from 'ngx-toastr';
import { DateAsAgoPipe } from './Pipes/dateAsAgo';
import { DealsViewComponent } from './components/dealler/deals-view/deals-view.component';
import { HoldingsViewComponent } from './components/dealler/holdings-view/holdings-view.component';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { CoinsComponent } from './components/home/coins/coins.component';
import { ClassesComponent } from './components/home/landing-page/classes/classes.component';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component';
import { ProductsComponent } from './components/home/landing-page/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditClassDialogComponent } from './components/admin/edit-class-dialog/edit-class-dialog.component';
import { EditProductDialogComponent } from './components/admin/edit-product-dialog/edit-product-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { environment } from 'src/environments/environment';
import { ClassComponent } from './components/class/class.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path:'class/:classId' , component: ClassComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RoundBigNumbersPipe,
    DateAsAgoPipe,
    // DeallerComponent,
    MenuComponent,
    HomeComponent,
    // DeallersComponent,
    // MakeADealComponent,
    ChartComponent,
    DealsViewComponent,
    HoldingsViewComponent,
    ChartComponent,
    RegisterDialogComponent,
    CoinsComponent,
    ClassesComponent,
    LandingPageComponent,
    ProductsComponent,
    AdminComponent,
    EditClassDialogComponent,
    EditProductDialogComponent,
    ClassComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    NgbToastModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
