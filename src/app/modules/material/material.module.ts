import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const Matcomponents = [MatIconModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, Matcomponents],
  exports: [Matcomponents],
})
export class MaterialModule {}
