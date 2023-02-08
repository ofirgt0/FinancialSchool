import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { RegisterDialogComponent } from '../../register-dialog/register-dialog.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  loggedInUserDisplayName!: string | null;
  loggedInUserId!: string | null;
  isLoggedIn$!: BehaviorSubject<boolean>;

  constructor(private toastr: ToastrService, 
              private authService: AuthService,
              public dialog: MatDialog, 
              private backend: FinancialSchoolBackendAccessService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.loggedInBehaviorSubject;
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if(isLoggedIn)
      {
        this.loggedInUserDisplayName = this.authService.loginTeacher.displayName;
        this.loggedInUserId = this.authService.loginTeacher.userName;
      }
    });
  }

  isTeacherLoggedin(){
    return this.loggedInUserDisplayName != null && this.loggedInUserDisplayName != "";
  }

  onLogout()
  {
    localStorage.setItem('TeacherId','')
    localStorage.setItem('TeacherPassword','')
    window.location.reload()
  }
  
  onTeacherLogin() {
    this.dialog.open(RegisterDialogComponent, {
      width: '30%'
    });
  }
}