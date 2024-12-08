import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

type Employee = {
  id: number | null,
  name: string;
  email: string;
  mobile: string;
};
@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  cityList: Array<String> = [
    'New York',
    'Mumbai',
    'London',
    'Jaipur',
    'Mithril',
    'San Francisco',
    'Nashik',
    'Tarapur',
  ];

  employees: Employee[] = [
    {
      id: 1,
      name: 'Sojwal Gosavi',
      email: 'sojwal@gmail.com',
      mobile: '8421882288',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com',
      mobile: '8421882288',
    },
    {
      id: 3,
      name: 'James Doe',
      email: 'jane@example.com',
      mobile: '8421882288',
    },
  ];
}
