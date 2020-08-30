import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { SonglistComponent } from './components/songlist/songlist.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const SharedComponents = [
  HeaderComponent,
  SidenavComponent,
  MusicPlayerComponent,
  SliderComponent,
  SonglistComponent,
  CarouselComponent,
];
@NgModule({
  declarations: [SharedComponents],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SharedComponents, ReactiveFormsModule, MaterialModule],
})
export class SharedModule {}
