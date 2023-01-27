import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { Class } from 'src/entities.model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  classes:{ [grade: string]: Class[] } = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
  };
  
  constructor(private backend: FinancialSchoolBackendAccessService) {}

  ngOnInit(): void {
    this.backend.getClasses().subscribe((classes) => {
      let resJSON = JSON.parse(JSON.stringify(classes)).result;
      console.log(resJSON);
      resJSON.forEach((cls: Class) => {
        this.classes[cls.id.charAt(0)].push(cls);
      });
    });
  }
}
