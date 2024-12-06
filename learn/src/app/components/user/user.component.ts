import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userName: string = 'Sojwal Gosavi';

  emailId: string = 'sojwalgosavi1999@gmail.com';

  dailySalary: number = 1000;

  presentDays: number = 0;

  monthlySalary: number = 0;

  updateMonthlySalary(): void {
    this.monthlySalary = this.presentDays * this.dailySalary;
  }

  handleSubmitButtonClick(): void {
    console.log('i am handling the clikc bro');
    alert("clcikc clik")
  }
}
