import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'suggested',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/suggested/suggested.module').then(
            (m) => m.SuggestedModule
          ),
      },
      {
        path: 'details',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/details/details.module').then((m) => m.DetailsModule),
      },
      {
        path: 'music-player',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/player/player.module').then((m) => m.PlayerModule),
      },
      {
        path: 'my-music',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/my-music/my-music.module').then(
            (m) => m.MyMusicModule
          ),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupModule),
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
