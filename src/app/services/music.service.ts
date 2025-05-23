import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private audio!: HTMLAudioElement;

  currentTrack: any = null;
  isPlaying = false;

  attachAudioElement(audioElement: HTMLAudioElement) {
    this.audio = audioElement;
  }

  play(track: any) {
    if (!this.audio) return;

    if (this.currentTrack?.url !== track.url) {
      this.audio.src = track.url;
      this.audio.load();
      this.currentTrack = track;
    }
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
  }

  togglePlay(track: any) {
    if (this.isPlaying && this.currentTrack?.url === track.url) {
      this.pause();
    } else {
      this.play(track);
    }
  }

  stop() {
    if (!this.audio) return;
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
  }
}
