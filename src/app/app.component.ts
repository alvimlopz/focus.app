import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicService } from './services/music.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pomodoro-focus';

   @ViewChild('globalAudio', { static: true }) globalAudio!: ElementRef<HTMLAudioElement>;

  constructor(public musicService: MusicService) {}

  ngAfterViewInit() {
    this.musicService.attachAudioElement(this.globalAudio.nativeElement);
  }

  onTrackEnd() {
    this.musicService.isPlaying = false;
    // Se quiser implementar next track futuramente, coloca aqui
  }
}
