import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMusicRoutingModule } from './my-music-routing.module';
import { MyMusicComponent } from './components/my-music/my-music.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyMusicComponent],
  imports: [CommonModule, MyMusicRoutingModule, SharedModule, FormsModule],
})
export class MyMusicModule {}
