import { Component, OnInit, Input } from '@angular/core';
import { PlaylistsService } from 'src/app/modules/core/services/playlists/playlists.service';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.scss'],
})
export class SonglistComponent implements OnInit {
  @Input() songs: any;
  dropDown = true;
  // Playlists
  playlists;
  constructor(private playlistsService: PlaylistsService) {}

  ngOnInit(): void {
    this.getPlaylists();
  }
  showOptions(): void {
    const dropDown = document.querySelector('.song__chips');
    dropDown.classList.toggle('active');
    if (this.dropDown === true) {
      this.dropDown = false;
    } else if (this.dropDown === false) {
      this.dropDown = true;
    }
  }
  addToPlaylist(playlistId, songId): void {
    console.log({ playlistId, songId });
    this.playlistsService
      .addSongToPlaylist(playlistId, songId)
      .subscribe((res) => {
        console.log(res);
      });
    $('#exampleModal').modal('hide');
  }
  getPlaylists(): void {
    this.playlistsService.getPlaylists().subscribe((res) => {
      console.log('Playlists', res);
      this.playlists = res.message;
    });
  }
}
