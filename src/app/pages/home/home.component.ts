import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
   imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userName: string = '';

  constructor(private router: Router) {}

  goToPomodoro() {
    localStorage.setItem('userName', this.userName);
    this.router.navigate(['/pomodoro']);
  }

}
