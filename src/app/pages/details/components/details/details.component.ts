import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PlaylistsService } from '../../../../modules/core/services/playlists/playlists.service';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  playlists: any;
  playlist: any;
  playlistLength: number;
  songs: any;
  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      console.log(res.id);
      this.getPlaylists(res.id);
    });
  }

  getPlaylists(ID): any {
    this.playlistService.getPlaylists().subscribe((playlists) => {
      this.playlists = playlists.message;
      this.playlist = this.playlists.find((playlists) => playlists._id === ID);
      this.playlistLength = this.playlist.songs.length;
    });
  }
}
