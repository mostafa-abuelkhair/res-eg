import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlParamsPipe } from '../shared/pipes/url-params.pipe';
import { UrlRoutePipe } from '../shared/pipes/url-route.pipe';


@NgModule({
  declarations: [
    UrlRoutePipe,
    UrlParamsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[ 
    UrlRoutePipe,
    UrlParamsPipe,
  ]

})
export class SharedModule { }
