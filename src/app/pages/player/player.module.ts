import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './components/player/player.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, PlayerRoutingModule, SharedModule],
})
export class PlayerModule {}
