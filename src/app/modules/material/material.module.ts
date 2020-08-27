import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const Matcomponents = [MatIconModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, Matcomponents],
  exports: [Matcomponents],
})
export class MaterialModule {}
