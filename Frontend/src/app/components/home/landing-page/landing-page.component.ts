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

  constructor(private toastr: ToastrService, private schoolService: FinancialSchoolBackendAccessService, public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  
  onTeacherLogin() {
    this.dialog.open(RegisterDialogComponent, {
      width: '30%',
    });
  }
}
