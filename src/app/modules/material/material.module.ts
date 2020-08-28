import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

const Matcomponents = [MatIconModule, MatCardModule, MatChipsModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, Matcomponents],
  exports: [Matcomponents],
})
export class MaterialModule {}
