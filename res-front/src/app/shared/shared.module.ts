import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlParamsPipe } from '../shared/pipes/url-params.pipe';
import { UrlRoutePipe } from '../shared/pipes/url-route.pipe';
import { PreloadingComponent } from './preloading/preloading.component';


@NgModule({
  declarations: [
    UrlRoutePipe,
    UrlParamsPipe,
    PreloadingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[ 
    UrlRoutePipe,
    UrlParamsPipe,
    PreloadingComponent
  ]

})
export class SharedModule { }
