import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';

const Matcomponents = [
  MatIconModule,
  MatCardModule,
  MatChipsModule,
  MatSliderModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, Matcomponents],
  exports: [Matcomponents],
})
export class MaterialModule {}
