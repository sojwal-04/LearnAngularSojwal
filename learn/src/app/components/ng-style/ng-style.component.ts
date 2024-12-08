import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css',
})
export class NgStyleComponent {
  bgColor: string = 'wheat';

  handleAddColor(color: string): void {
    this.bgColor = color;
  }

  isChecked: boolean = false;

  ngCss: any = {
    'background-color': 'red',
    height: '100px',
    width: '600px',
    border: '4px solid gray',
    'border-radius': '5px',
  };
}
