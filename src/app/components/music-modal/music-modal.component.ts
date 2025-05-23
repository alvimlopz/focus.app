import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-music-modal',
  templateUrl: './music-modal.component.html',
  styleUrls: ['./music-modal.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MusicModalComponent {

  @Output() closeModal = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  activeTab = 'spotify';

  spotifyPlaylists = [
    {
      name: 'Lofi Beats',
      image: '/lofi.png',
      url: 'https://open.spotify.com/embed/artist/1dABGukgZ8XKKOdd2rVSHM?utm_source=generator'
    }
   
  ];

  selectedSpotify: any = null;

  // Native Player
  nativePlaylists = [
    {
      name: 'Ambient and Nature',
      image: 'assets/ambient.png',
      tracks: [
        { name: 'ambient 1', url: 'assets/ambient1.mp3', duration: '4:10' },
        { name: 'ambient 2', url: 'assets/ambient2.mp3', duration: '4:05' }
      ]
    },
    {
      name: 'Lofi',
      image: 'assets/lofi2.png',
      tracks: [
        { name: 'lofi 1', url: 'assets/lofi1.mp3', duration: '3:00' },
        { name: 'lofi 2', url: 'assets/lofi2.mp3', duration: '3:20' }
      ]
    }
  ];

  selectedNative: any = null;
  currentTrackIndex = 0;
  currentTrack: any = null;

  @ViewChild('audio') audioRef!: ElementRef;

  // Spotify
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  selectSpotify(playlist: any) {
    this.selectedSpotify = playlist;
  }

  // Native
  selectNative(playlist: any) {
    this.selectedNative = playlist;
    this.playTrack(0);
  }

  playTrack(index: number) {
    this.currentTrackIndex = index;
    this.currentTrack = this.selectedNative.tracks[index];
    const audio = this.audioRef?.nativeElement as HTMLAudioElement;
    if (audio) {
      audio.src = this.currentTrack.url;
      audio.play();
    }
  }

  nextTrack() {
    if (this.currentTrackIndex + 1 < this.selectedNative.tracks.length) {
      this.playTrack(this.currentTrackIndex + 1);
    }
  }

  close() {
    this.closeModal.emit();
  }
}
