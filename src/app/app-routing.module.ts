
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@myApp/core';
import { HomePageAuthGuard } from './core/guards/home-page-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [HomePageAuthGuard]
  },
  {
    path: 'lazy-load',
    loadChildren: './lazy-load/lazy-load.module#LazyLoadModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
