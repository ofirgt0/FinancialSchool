import { Component, OnInit } from '@angular/core';
import { Class } from 'src/entities.model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  classes: Class[][] = [
    [
      {
        name: "א'1",
        level: 1,
        currentCurrency: 100,
        teacher: 'מיכל אנסקי',
      },
      {
        name: "א'2",
        level: 1,
        currentCurrency: 100,
        teacher: 'רותם סלע',
      },
      {
        name: "א'3",
        level: 1,
        currentCurrency: 100,
        teacher: 'גיא זוארץ',
      },
      {
        name: "א'4",
        level: 1,
        currentCurrency: 100,
        teacher: 'מיכל אנסקי',
      },
    ],
    [
      {
        name: "ב'1",
        level: 2,
        currentCurrency: 100,
        teacher: 'מיכל אנסקי',
      },
      {
        name: "ב'2",
        level: 2,
        currentCurrency: 100,
        teacher: 'רותם סלע',
      },
      {
        name: "ב'3",
        level: 2,
        currentCurrency: 100,
        teacher: 'גיא זוארץ',
      },
      {
        name: "ב'4",
        level: 2,
        currentCurrency: 100,
        teacher: 'מיכל אנסקי',
      },
    ],
    [
      {
        name: "ג'1",
        level: 3,
        currentCurrency: 100,
        teacher: 'מיכל אנסקי',
      },
      {
        name: "ג'2",
        level: 3,
        currentCurrency: 100,
        teacher: 'רותם סלע',
      },
      {
        name: "ג'3",
        level: 3,
        currentCurrency: 100,
        teacher: 'גיא זוארץ',
      },
      {
        name: "ג'4",
        level: 3,
        currentCurrency: 100,
        teacher: 'מיכל אנסקי',
      },
    ],
    [
      {
        name: "ד'1",
        level: 4,
        currentCurrency: 100,
        teacher: 'מיכל אנסקי',
      },
      {
        name: "ד'2",
        level: 4,
        currentCurrency: 100,
        teacher: 'רותם סלע',
      },
      {
        name: "ד'3",
        level: 4,
        currentCurrency: 100,
        teacher: 'גיא זוארץ',
      }
    ],
    [
      {
        name: "ה'1",
        level: 1,
        currentCurrency: 100,
        teacher: 'מיכל אנסקי',
      },
      {
        name: "ה'2",
        level: 1,
        currentCurrency: 100,
        teacher: 'רותם סלע',
      },
      {
        name: "ה'3",
        level: 1,
        currentCurrency: 100,
        teacher: 'גיא זוארץ',
      }
    ],
    [
      {
        name: "ו'1",
        level: 1,
        currentCurrency: 100,
        teacher: 'מיכל אנסקי',
      },
      {
        name: "ו'2",
        level: 1,
        currentCurrency: 100,
        teacher: 'רותם סלע',
      },
      {
        name: "ו'3",
        level: 1,
        currentCurrency: 100,
        teacher: 'גיא זוארץ',
      },
      {
        name: "ו'4",
        level: 1,
        currentCurrency: 100,
        teacher: 'גיא זוארץ',
      }
    ],
  ];

  constructor() {}

  ngOnInit(): void {
    console.log("fff")
  }
}
