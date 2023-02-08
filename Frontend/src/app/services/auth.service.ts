import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Class, User } from 'src/entities.model';

const BACKEND_URL = 'https://localhost:44390/api/';
const USERS = 'Users';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  loginTeacher!: User;
  isLoggedIn: boolean = false;

  loggedInSubject = new Subject<boolean>();
  loggedInBehaviorSubject = new BehaviorSubject(false);

  updateLoggedInState(state: boolean) {
    this.loggedInSubject.next(state);
    this.loggedInBehaviorSubject.next(state);
  }
  isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor(private toastr: ToastrService, private http: HttpClient) {}

  ngOnInit(): void {
    if(localStorage.getItem('TeacherId') != null && localStorage.getItem('TeacherId') != '')
       this.getAuth(localStorage.getItem('TeacherId')!,localStorage.getItem('TeacherPassword')!);
  }

  getAuth(userName: string, password: string) {
    this.http
      .get<boolean>(BACKEND_URL + USERS + '/Auth/' + userName + '/' + password)
      .subscribe(
        (res) => {
          if (res) {
            this.http
              .get<User>(BACKEND_URL + USERS + '/' + userName)
              .subscribe((res) => {
                this.loginTeacher = res;
                localStorage.setItem('TeacherId', userName);
                localStorage.setItem('TeacherPassword', password);
                this.toastr.success(
                  this.loginTeacher.displayName + ' ברוך הבא'
                );
                this.updateLoggedInState(true);
              });
            return true;
          }
          this.toastr.warning('ת.ז או סיסמא אינם נכונים');
          return false;
        },
        () => {
          this.toastr.warning('ההתחברות נכשלה');
          return false;
        }
      );
  }
}
