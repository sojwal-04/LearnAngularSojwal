import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  showGreenColor: boolean = true;

  handleToggleColor() : void {

    this.showGreenColor = !this.showGreenColor;
  }

  divTwoBGColor: string = 'bg-red-200';

  handleAddDivTwoColor(colorName: string): void{
    this.divTwoBGColor = colorName;
  }

}
