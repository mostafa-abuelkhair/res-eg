import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardsCarouselComponent } from './home/cards-carousel/cards-carousel.component';
import { PowerComponent } from './home/power/power.component';
import { ServiceComponent } from './home/service/service.component';
import { MessageComponent } from './home/message/message.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { PrefooterComponent } from './home/prefooter/prefooter.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SolutionsComponent } from './solutions/solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardsCarouselComponent,
    PowerComponent,
    ServiceComponent,
    MessageComponent,
    FeaturedComponent,
    FooterComponent,
    PrefooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
