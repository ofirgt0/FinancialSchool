import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { Class, User } from 'src/entities.model';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    public financialService: FinancialSchoolBackendAccessService,
    private toastr: ToastrService
  ) {}

  loginUserName = '';
  loginPassword = '';
  registerData: User = {
    class: '',
    displayName: '',
    password: '',
    type: 'teacher',
    userName: '',
  };
  classes = [
    { gradeId: 'a', viewGrade: 'א' },
    { gradeId: 'b', viewGrade: 'ב' },
    { gradeId: 'c', viewGrade: 'ג' },
    { gradeId: 'd', viewGrade: 'ד' },
    { gradeId: 'e', viewGrade: 'ה' },
    { gradeId: 'f', viewGrade: 'ו' },
  ];
  classesMap: { [gradeId: string]: string } = {
    a: 'א',
    b: 'ב',
    c: 'ג',
    d: 'ד',
    e: 'ה',
    f: 'ו',
  };
  numbers = [1, 2, 3, 4, 5];
  class: Class = {
    displayName: '',
    id: '',
    teacher: '',
    totalCash: 100,
  };
  classLevel:string = '';
  classNumber = 0;
  AuthResult = false;

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }

  onLogin() {
    this.financialService
      .getAuth(this.loginUserName, this.loginPassword)
      .subscribe(
        (res) => {
          this.AuthResult = true;
          this.dialogRef.close(this.AuthResult);
        },
        (err) => {
          console.log(err);
          this.AuthResult = false;
        }
      );
  }

  onSubmit() {}

  onRegister() {
    this.registerData.class = this.classLevel + this.classNumber;
    this.class.id = this.classLevel + this.classNumber;
    this.class.teacher = this.registerData.userName;
    this.class.displayName = this.classesMap[this.classLevel] + "'" + this.classNumber;
    
    this.financialService.insertNewUser(this.registerData).subscribe(res=>{console.log(res)}, ()=>this.toastr.success("לא ניתן להוסיף את המורה"));
    this.financialService.insertNewClass(this.class).subscribe(res=>{console.log(res)}, ()=>this.toastr.success("לא ניתן להוסיף את הכיתה הרצויה"));

    this.toastr.success("המורה נרשם בהצלחה");
    this.dialogRef.close();
  }
}
