import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { Teacher } from 'src/entities.model';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>
    , public financialService:FinancialSchoolBackendAccessService) { }
  
  loginData = {
    loginId: 0,
    loginPassword: ""
  };

  registerData :Teacher = {
    id: 0,
    class: '',
    name: '',
    password: ''
  };

  ngOnInit(): void {
    this.financialService.getTeachers()
      .subscribe(res=>console.log(res));

  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit(){
    console.log(this.loginData)
  }

  onRegister()
  {
    console.log(this.registerData);
    this.financialService.postTeacher(this.registerData);
  }
}
