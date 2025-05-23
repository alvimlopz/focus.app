import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings-focus-time',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings-focus-time.component.html',
  styleUrls: ['./settings-focus-time.component.scss']
})
export class SettingsFocusTimeComponent {

  @Input() focusTimeSettings: any;
  @Output() settingsChanged = new EventEmitter();

  preset = 'custom';
  customPomodoro = 25;
  customShortBreak = 5;
  customLongBreak = 15;

  ngOnInit() {
    if (this.focusTimeSettings) {
      this.preset = this.focusTimeSettings.preset;
      this.customPomodoro = this.focusTimeSettings.pomodoro;
      this.customShortBreak = this.focusTimeSettings.shortBreak;
      this.customLongBreak = this.focusTimeSettings.longBreak;
    }
  }

  selectPreset(preset: string) {
    this.preset = preset;

    if (preset === 'popular') {
      this.customPomodoro = 20;
      this.customShortBreak = 5;
      this.customLongBreak = 15;
    } else if (preset === 'medium') {
      this.customPomodoro = 40;
      this.customShortBreak = 8;
      this.customLongBreak = 20;
    } else if (preset === 'extended') {
      this.customPomodoro = 60;
      this.customShortBreak = 10;
      this.customLongBreak = 25;
    }

    this.emitChanges(); // 🔥 Importante! Garante que ao clicar no preset, já atualiza
  }

  emitChanges() {
    this.settingsChanged.emit({
      pomodoro: this.customPomodoro,
      shortBreak: this.customShortBreak,
      longBreak: this.customLongBreak,
      preset: this.preset
    });
  }
}
