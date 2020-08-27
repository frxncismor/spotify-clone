import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  items = [
    {
      title: 'New song',
      artist: 'RawArtist',
      url: 'https://source.unsplash.com/random?music/1600x900',
    },
    {
      title: 'New song',
      artist: 'RawArtist',
      url: 'https://source.unsplash.com/random?music/1600x900',
    },
    {
      title: 'New song',
      artist: 'RawArtist',
      url: 'https://source.unsplash.com/random?music/1600x900',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
