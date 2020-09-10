import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsService {
  token: string;
  constructor(private http: HttpClient, private loginService: LoginService) {
    this.token = this.loginService.getToken();
  }

  createPlaylist(playlistName): any {
    const userId = this.token;
    return this.http.post(
      'https://spotify-clone-flux.herokuapp.com/playlist/create',
      { alias: playlistName, userId }
    );
  }
  getPlaylists(): any {
    const userId = this.token;
    return this.http.get(
      `https://spotify-clone-flux.herokuapp.com/playlist/${userId}`
    );
  }
  addSongToPlaylist(playlistId, songId): any {
    return this.http.post(
      `https://spotify-clone-flux.herokuapp.com/playlist/${playlistId}/add-song/`,
      { songId }
    );
  }
  getSongs(): any {
    const songName = 'isolate';
    return this.http.get(
      `https://spotify-clone-flux.herokuapp.com/songs/${songName}`
    );
  }
}
