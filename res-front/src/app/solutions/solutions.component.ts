import { Component } from '@angular/core';
import { ProductsApiService } from '../shared/services/products-api.service';

type product = {id:number,part_number:string,image:string,description:string,short_description:string,category_id:number,price:number};


@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {

  constructor(private api:ProductsApiService){

  }

  filters_data  = [
    {name:'Type', values:['line interactive','AVR','Online']},
    {name:'Rated Power in VA', values:['600','1000','2000','5000','6000','8000','10000','20000']}
  ]

  filters=this.filters_data.map((filter)=>{ return {...filter,class:'list-hide'} });

  products:product[] = [];

  ngOnInit() {

    this.api.getAll(0).subscribe( (response:any) => { 
      this.products = response;
    });
}

}


