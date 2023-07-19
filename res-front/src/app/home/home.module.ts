import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardsCarouselComponent } from './cards-carousel/cards-carousel.component';
import { PowerComponent } from './power/power.component';
import { ServiceComponent } from './service/service.component';
import { MessageComponent } from './message/message.component';
import { FeaturedComponent } from './featured/featured.component';
import { PrefooterComponent } from './prefooter/prefooter.component';
import { UrlParamsPipe } from '../pipes/url-params.pipe';
import { UrlRoutePipe } from '../pipes/url-route.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    CardsCarouselComponent,
    PowerComponent,
    ServiceComponent,
    MessageComponent,
    FeaturedComponent,
    PrefooterComponent,
    UrlRoutePipe,
    UrlParamsPipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
