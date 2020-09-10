import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../modules/core/services/login.service';
import { PlaylistsService } from '../../../modules/core/services/playlists/playlists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Welcome user data
  name: string;
  lastname: string;
  // All songs length
  songsLength: number;
  songs: any;
  constructor(
    private loginService: LoginService,
    private playlistsService: PlaylistsService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.getSongs();
  }
  getCurrentUser(): void {
    this.loginService.getCurrentUser().subscribe((res) => {
      this.name = res.message.name;
      this.lastname = res.message.lastname;
    });
  }
  getSongs(): void {
    this.playlistsService.getSongs().subscribe((songs) => {
      console.log('Songs', songs);
      this.songsLength = songs.message.length;
      this.songs = songs.message;
    });
  }
}
