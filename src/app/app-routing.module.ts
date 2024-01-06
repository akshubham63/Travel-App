import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/features/home/home.component';
import { ToursComponent } from './component/features/tours/tours.component';
import { BlogsComponent } from './component/features/blogs/blogs.component';
import { AirTicketsComponent } from './component/features/air-tickets/air-tickets.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tours',
    component: ToursComponent
  },
  {
    path: 'blog',
    component: BlogsComponent
  },
  {
    path: 'air_tickets',
    component: AirTicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
