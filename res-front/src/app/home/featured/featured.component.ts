import { Component } from '@angular/core';
import { ProductsApiService } from 'src/app/shared/services/products-api.service';

type product = {id:number,reference:string,image:string,description:string};

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {

  constructor(private api:ProductsApiService){}

  products:product[] = [];

  ngOnInit() {

    this.api.getFeatured().subscribe( (response:any) => { 
      this.products = response;
    });
}

}
