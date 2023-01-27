import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BackendAccessService } from 'src/app/services/BackendAccess.service';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isAuth = false;
  deallerName = '';

  constructor(private backendAccess: BackendAccessService,private toastr: ToastrService, 
    private schoolService: FinancialSchoolBackendAccessService, public dialog: MatDialog) {}

  async ngOnInit(): Promise<void> {
    this.backendAccess.setAuthValue(this.isAuth);
    this.backendAccess.getAuthValue().subscribe(data=>this.isAuth==data)
  }

  Logout() {
    this.isAuth = false;
    this.backendAccess.setAuthValue(this.isAuth);
  }
  
  onTeacherLogin() {
    this.dialog.open(RegisterDialogComponent, {
      width: '30%',
    }).afterClosed().subscribe(res => {
      this.toastr.success("ההתחברות בוצעה בהצלחה");
    });
  }
}