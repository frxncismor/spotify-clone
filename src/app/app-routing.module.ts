import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'suggested',
        loadChildren: () =>
          import('./pages/suggested/suggested.module').then(
            (m) => m.SuggestedModule
          ),
      },
      {
        path: 'details',
        loadChildren: () =>
          import('./pages/details/details.module').then((m) => m.DetailsModule),
      },
      {
        path: 'music-player',
        loadChildren: () =>
          import('./pages/player/player.module').then((m) => m.PlayerModule),
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
