import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MusicModalComponent } from '../../components/music-modal/music-modal.component';
import { SettingsMenuComponent } from '../../components/settings-menu/settings-menu.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [CommonModule, MusicModalComponent, SettingsMenuComponent, FormsModule],
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent {

  mantraPadrao = '“Encontre a maneira, e se não houver, crie-a.”';
mantraPersonalizado: string | null = null;

  showMusicModal = false;
  showSettings = false;


mostrarMenu = false;
editandoMantra = false;
novoMantra = '';
  userName: string = '';
  timer: string = '25:00';
  timerRunning = false;
    remainingSeconds = 0;
    interval: any;

  pomodoros = 0;
  shortBreaks = 0;
  longBreaks = 0;

   focusTimeSettings = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    preset: 'custom'
  };

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Usuário';
    this.updateTimerDisplay();
    this.mantraPersonalizado = localStorage.getItem('mantra') || null;
  }

  get mantraAtual() {
  return this.mantraPersonalizado || this.mantraPadrao;
}

editarMantra() {
  this.editandoMantra = true;
  this.novoMantra = this.mantraAtual;
}

salvarMantra() {
  if (this.novoMantra.trim() === '') {
    this.mantraPersonalizado = null;
    localStorage.removeItem('mantra');
  } else {
    this.mantraPersonalizado = this.novoMantra.trim();
    localStorage.setItem('mantra', this.mantraPersonalizado);
  }
  this.editandoMantra = false;
}

removerMantra() {
  this.mantraPersonalizado = null;
  localStorage.removeItem('mantra');
  this.editandoMantra = false;
}

   openSettings() {
    this.showSettings = true;
  }

  closeSettings() {
    this.showSettings = false;
  }


  openMusicModal() {
    this.showMusicModal = true;
  }

  closeMusicModal() {
    this.showMusicModal = false;
  }

  onSettingsChanged(event: any) {
    this.focusTimeSettings = event;
    this.updateTimerDisplay();
    this.stopTimer(); // sempre zera quando muda configuração
  }

  updateTimerDisplay() {
    const minutes = this.focusTimeSettings.pomodoro;
    this.remainingSeconds = minutes * 60;
    this.timer = this.formatTime(this.remainingSeconds);
  }

  formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : '' + num;
  }

  toggleTimer() {
    if (this.timerRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.timerRunning = true;
    this.interval = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.timer = this.formatTime(this.remainingSeconds);
      } else {
        this.stopTimer();
        // Aqui você pode disparar um som ou alguma notificação de "Fim"
      }
    }, 1000);
  }

  stopTimer() {
    this.timerRunning = false;
    clearInterval(this.interval);
  }

  
}
