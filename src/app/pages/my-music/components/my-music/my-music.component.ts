import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../../../modules/core/services/playlists/playlists.service';

@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.component.html',
  styleUrls: ['./my-music.component.scss'],
})
export class MyMusicComponent implements OnInit {
  // Body to createplaylist request
  playlistName: string;
  // playlists length
  playlistsLength: number;
  playlists: any;

  constructor(private playlistsService: PlaylistsService) {}
  ngOnInit(): void {
    this.getPlaylists();
  }

  createPlaylist(playlistName): any {
    this.playlistsService.createPlaylist(playlistName).subscribe((res) => {
      console.log(res);
    });
    $('#staticBackdrop').modal('hide');
    this.getPlaylists();
  }
  getPlaylists(): void {
    this.playlistsService.getPlaylists().subscribe((res) => {
      console.log('Playlists', res);
      this.playlistsLength = res.message.length;
      this.playlists = res.message;
    });
  }
}
