import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private toastr: ToastrService, 
              public dialog: MatDialog, private backend: FinancialSchoolBackendAccessService) {}

  ngOnInit(): void {
    this.loggedInUserId = localStorage.getItem('TeacherId')
    this.loggedInUserDisplayName = localStorage.getItem('TeacherDisplayName')
  }

  isTeacherLoggedin(){
    return this.loggedInUserDisplayName != null && this.loggedInUserDisplayName != "";
  }

  onLogout()
  {
    localStorage.setItem('TeacherId','')
    localStorage.setItem('TeacherDisplayName','')
    window.location.reload()
  }
  
  onTeacherLogin() {
    this.dialog.open(RegisterDialogComponent, {
      width: '30%'
    });
  }
}