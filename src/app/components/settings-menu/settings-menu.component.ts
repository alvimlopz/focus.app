import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SettingsFocusTimeComponent } from '../settings-focus-time/settings-focus-time.component';

@Component({
  selector: 'app-settings-menu',
  standalone: true,
  imports: [CommonModule, SettingsFocusTimeComponent],
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent {

  @Output() closeMenuEvent = new EventEmitter();

  showFocusTime = false;

  closeMenu() {
    this.closeMenuEvent.emit();
  }

  openFocusTime() {
    this.showFocusTime = true;
  }

  closeFocusTime() {
    this.showFocusTime = false;
  }

  onSettingsChanged(event: any) {
    console.log('Configurações atualizadas:', event);
  }
}
