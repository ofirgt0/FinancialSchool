import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { DeallerComponent } from './components/dealler/dealler.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
// import { DeallersComponent } from './components/deallers/deallers.component';
import { AppRoutingModule } from './app-routing.module';
import { RoundBigNumbersPipe } from './Pipes/RoundBigNumbers';
import { MakeADealComponent } from './components/home/make-adeal/make-adeal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { ChartComponent } from './components/home/chart/chart.component';
import { NgbToastModule } from  'ngb-toast';
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

// import { AngularFireModule } from "@angular/fire/compat";
// import { AngularFireDatabaseModule, AngularFireObject } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

const appRoutes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'deallers' , component: ClassesComponent},
  // {path:'dealler' , component: DeallerComponent}

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
    MakeADealComponent,
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
    EditProductDialogComponent
             
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatBadgeModule ,
    MatButtonModule,
    MatDialogModule ,
    MatCardModule,
    MatTabsModule,
    NgbToastModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes), 
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAEsYhD5AFWp1wSBmQvMoVLMsaf9Xo2UxE",
//   authDomain: "financialschool-dfd3e.firebaseapp.com",
//   databaseURL: "https://financialschool-dfd3e-default-rtdb.firebaseio.com",
//   projectId: "financialschool-dfd3e",
//   storageBucket: "financialschool-dfd3e.appspot.com",
//   messagingSenderId: "785869715307",
//   appId: "1:785869715307:web:ae52d978cd40873d57fe2e",
//   measurementId: "G-JJ8XET8WQJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);