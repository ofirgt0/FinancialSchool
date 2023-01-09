import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Class, Product, Teacher } from 'src/entities.model';

// import { AngularFireModule } from '@angular/fire/compat'; import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; import { AngularFireStorageModule } from '@angular/fire/compat/storage'; import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const BACKEND_URL =
  'https://financialschool-dfd3e-default-rtdb.firebaseio.com/';
const TEACHER = 'teacher.json';
const CLASSES = 'classes.json';
const PRODUCTS = 'products.json';
const HISTORY = 'history.json';
const COINS = 'coins.json';

@Injectable({
  providedIn: 'root',
})
export class FinancialSchoolBackendAccessService implements OnInit{

  //dbContext: AngularFireObject<any>;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.saveData("test")
    }

  getTeachers()  {
    return this.http
      .get<any>(BACKEND_URL + TEACHER)
      .pipe(map(res=>{
        const arr = [];
        for(const key in res)
        {
          if(res.hasOwnProperty(key)){
            arr.push({...res[key]})
          }
        }
        return arr;
      }));
  }

  postTeacher(newTeacher: Teacher) {
    this.getTeachers().subscribe((teachers) => {
      // if(teachers.find(teacher=> teacher.id === newTeacher.id))
      //   return false;
      this.http
        .post(BACKEND_URL + TEACHER, newTeacher)
        .subscribe((res) => console.log(res));
      return true;
    });
  }

  getClasses() : Observable<Class[][]> {
    return this.http.get<Class[][]>(BACKEND_URL + CLASSES);
  }

  postClass(classData: Class) {
    this.http
      .post(BACKEND_URL + CLASSES, classData)
      .subscribe((res) => console.log(res));
  }

  getProducts() {
    return this.http.get(BACKEND_URL + PRODUCTS);
  }

  postProduct(product: Product) {
    this.http
      .post(BACKEND_URL + PRODUCTS, product)
      .subscribe((res) => console.log(res));
  }

  fetchData(path: string) {
    return this.http.get(BACKEND_URL + path);
  }

  postData(path: string, data: any) {
    this.http.post(BACKEND_URL + path, data);
  }

  saveData(inputValue:string){
    // const ref = this.db.list("items");
    // ref.push(inputValue).then((res)=>
    // {console.log(res)})
  }

}