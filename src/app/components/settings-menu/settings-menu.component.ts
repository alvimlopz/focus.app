import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SettingsFocusTimeComponent } from '../settings-focus-time/settings-focus-time.component';

@Component({
  selector: 'app-settings-menu',
  standalone: true,
  imports: [CommonModule, SettingsFocusTimeComponent],
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent {

  @Input() focusTimeSettings: any;
  @Output() closeMenuEvent = new EventEmitter();
  @Output() settingsChanged = new EventEmitter();

  currentView = 'menu'; // 'menu' ou 'focus'

  openFocusTime() {
    this.currentView = 'focus';
  }

  backToMenu() {
    this.currentView = 'menu';
  }

  closeMenu() {
    this.closeMenuEvent.emit();
  }

  onFocusSettingsChanged(event: any) {
    this.settingsChanged.emit(event);
  }
}