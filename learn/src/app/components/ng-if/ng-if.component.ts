import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css',
})
export class NgIfComponent {
  showDiv: boolean = false;

  handleDivVisibility(toShow: boolean): void {
    this.showDiv = toShow;
  }

  firstNum: string = '';
  secondNum: string = '';


}
