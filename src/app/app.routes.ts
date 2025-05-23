import { Routes } from '@angular/router';
import { PomodoroComponent } from './pages/pomodoro/pomodoro.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pomodoro', component: PomodoroComponent },
  { path: '**', redirectTo: '' }
];
