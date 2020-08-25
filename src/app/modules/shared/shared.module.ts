import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';

const componentes = [HeaderComponent, SidenavComponent, MusicPlayerComponent];
@NgModule({
  declarations: [componentes],
  imports: [CommonModule],
  exports: [componentes],
})
export class SharedModule {}
