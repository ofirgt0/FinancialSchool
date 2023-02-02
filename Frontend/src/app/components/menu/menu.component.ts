import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private toastr: ToastrService, 
    private schoolService: FinancialSchoolBackendAccessService, public dialog: MatDialog) {}

  async ngOnInit(): Promise<void> {
  }

  Logout() {
    this.isAuth = false;
  }
  
  onTeacherLogin() {
    this.dialog.open(RegisterDialogComponent, {
      width: '30%',
    }).afterClosed().subscribe(res => {
      this.toastr.success("ההתחברות בוצעה בהצלחה");
    });
  }
}