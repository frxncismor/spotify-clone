import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuggestedComponent } from './components/suggested/suggested.component';

const routes: Routes = [{ path: '', component: SuggestedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestedRoutingModule {}
