import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-music-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-modal.component.html',
  styleUrls: ['./music-modal.component.scss']
})
export class MusicModalComponent {

  @Output() closeModal = new EventEmitter<void>();

  constructor(
    public musicService: MusicService, // 🔥 Agora tá injetado
    private sanitizer: DomSanitizer
  ) {}

  activeTab = 'spotify';

  spotifyPlaylists = [
    {
      name: 'Lofi Beats',
      image: '/lofi.png',
       url: 'https://open.spotify.com/embed/artist/1dABGukgZ8XKKOdd2rVSHM?utm_source=generator'
    }
  ];

  selectedSpotify: any = null;
  selectedPlaylist: any = null; // 🔥 Isso que tava faltando

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

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  selectSpotify(playlist: any) {
    this.selectedSpotify = playlist;
  }

  selectNative(playlist: any) {
    this.selectedPlaylist = playlist;
  }

  playTrack(track: any) {
    this.musicService.togglePlay(track);
  }

  close() {
    this.closeModal.emit();
  }
}
