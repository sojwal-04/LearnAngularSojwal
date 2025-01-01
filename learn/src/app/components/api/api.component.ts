import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent {
  counter: number = 0;

  setCounter = (value: number): void => {
    this.counter = value;
  };

  products: Array<any> = [];
  handleFetchProducts = async (e: Event): Promise<void> => {
    e.preventDefault();
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      this.products = await res.json();
    } catch (err) {
      console.error(err);
    }
  };

  cities: string[] = ['Pune', 'Mumbai', 'Meal'];
  // cities: string[] = []
}
