import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'detail-page/:id', component: DetailPageComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
