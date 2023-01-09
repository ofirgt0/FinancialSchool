import { Component, OnInit } from '@angular/core';
import { Product } from 'src/entities.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  products: Product[] = [
    {
      id: 1,
      title: 'הפסקה פעילה',
      description:
        'הפסקה ממש פעילה שהילדים מאוד אוהבים. אם אספו מספיק כשף תוכלו לרכוש זאת',
      price: 40,
    },
    {
      id: 2,
      title: 'שיעור ספורט',
      description:
        'הפסקה ממש פעילה שהילדים מאוד אוהבים. אם אספו מספיק כשף תוכלו לרכוש זאת',
      price: 59,
    },
    {
      id: 3,
      title: 'שיעור קצר',
      description:
        'הפסקה ממש פעילה שהילדים מאוד אוהבים. אם אספו מספיק כשף תוכלו לרכוש זאת',
      price: 13,
    },
    {
      id: 4,
      title: 'הפסקה פעילה',
      description:
        'הפסקה ממש פעילה שהילדים מאוד אוהבים. אם אספו מספיק כשף תוכלו לרכוש זאת',
      price: 30,
    },
  ];

  ngOnInit(): void {}
}
