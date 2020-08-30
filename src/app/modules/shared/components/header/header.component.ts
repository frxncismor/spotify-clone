import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  dropDown = true;
  genres = [
    { name: 'Ambient' },
    { name: 'Rock' },
    { name: 'Electronic' },
    { name: 'Hip-hop' },
    { name: 'Experimental' },
    { name: 'Acustic' },
    { name: 'Reggae' },
    { name: 'Jazz' },
    { name: 'Funk' },
    { name: 'Pop' },
    { name: 'Ballad' },
    { name: 'Other' },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {}
  dropGenres(): void {
    const dropDown = document.querySelector('.searcher__chips');
    dropDown.classList.toggle('active');
    if (this.dropDown === true) {
      this.dropDown = false;
    } else if (this.dropDown === false) {
      this.dropDown = true;
    }
  }
  getGenre(genre): void {
    console.log(genre);
  }
}
