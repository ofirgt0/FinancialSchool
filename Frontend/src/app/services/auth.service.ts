import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Class, User } from 'src/entities.model';

const BACKEND_URL = 'https://localhost:44390/api/';
const USERS = 'Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  loginTeacher!: User;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  getAuth(userName: string, password: string) {
    this.http.get<boolean>(BACKEND_URL + USERS + '/Auth/' + userName + '/' + password).subscribe(() => {
      this.http.get(BACKEND_URL + USERS + '/' + userName).subscribe((res) => {
        let teacherJSON = JSON.parse(JSON.stringify(res)).result;
        this.loginTeacher = teacherJSON;
        console.log("getAuth");
        console.log(userName);
        localStorage.setItem('TeacherId', userName)
        localStorage.setItem('TeacherDisplayName', this.loginTeacher.displayName)
        console.log(this.loginTeacher);
      });
    });
    return true;
  }
}