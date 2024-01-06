import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './component/features/home/home.component';
import { ToursComponent } from './component/features/tours/tours.component';
import { BlogsComponent } from './component/features/blogs/blogs.component';
import { AirTicketsComponent } from './component/features/air-tickets/air-tickets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    HomeComponent,
    ToursComponent,
    BlogsComponent,
    AirTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
