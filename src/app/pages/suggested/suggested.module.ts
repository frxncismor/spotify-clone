import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestedRoutingModule } from './suggested-routing.module';
import { SuggestedComponent } from './components/suggested/suggested.component';

@NgModule({
  declarations: [SuggestedComponent],
  imports: [CommonModule, SuggestedRoutingModule],
})
export class SuggestedModule {}
