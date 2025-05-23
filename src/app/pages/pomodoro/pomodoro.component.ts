import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MusicModalComponent } from '../../components/music-modal/music-modal.component';
import { SettingsMenuComponent } from '../../components/settings-menu/settings-menu.component';

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [CommonModule, MusicModalComponent, SettingsMenuComponent],
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent {

  showMusicModal = false;
  showSettings = false;

  userName: string = '';
  timer: string = '25:00';

  pomodoros = 0;
  shortBreaks = 0;
  longBreaks = 0;

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Usuário';
  }

  openMusicModal() {
    this.showMusicModal = true;
  }

  closeMusicModal() {
    this.showMusicModal = false;
  }

  openSettings() {
    this.showSettings = true;
  }

  closeSettings() {
    this.showSettings = false;
  }
}
