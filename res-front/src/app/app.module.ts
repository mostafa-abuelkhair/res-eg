import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardsCarouselComponent } from './cards-carousel/cards-carousel.component';
import { PowerComponent } from './power/power.component';
import { ServiceComponent } from './service/service.component';
import { MessageComponent } from './message/message.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { PrefooterComponent } from './prefooter/prefooter.component';

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
    PrefooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
