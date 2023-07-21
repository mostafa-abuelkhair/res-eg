import { Component, ViewChild } from '@angular/core';
import { ProductsApiService } from '../shared/services/products-api.service';

type product = {id:number,part_number:string,image:string,description:string,short_description:string,category_id:number,price:number};


@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {

  constructor(private api:ProductsApiService){}

  @ViewChild('productsEl') productsEl:any; 

  filters_data  = [
    {name:'UPS type', values:[['line interactive'],['AVR'],['Double conversion online']]},
    {name:'Rated power in VA', values:[['600 VA'],['1000 VA'],['2000 VA'],['5000 VA'],['6000 VA'],['8000 VA'],['10000 VA'],['20000 VA']]}
  ]

  filters:any=this.filters_data.map((filter)=>{ return {...filter,class:'list-hide', valueChoosed:null} });

  products:product[] = [];

  skip = 0;

  count = 0;

  ngOnInit() {

    this.getProducts();

  }

  addFilter(filterIndex:number, valueIndex:number){
    this.filters[filterIndex].valueChoosed=valueIndex;
    this.skip=0;
    this.getProducts();
    this.scrollToProducts();
  }

  getProducts(){
    
    this.api.getAll(this.skip , this.getFiltersChoosed()).subscribe( (response:any) => { 
      this.products = response.products;
      this.count = Number(response.count);

    });

  }

  getFiltersChoosed(){
    return this.filters.filter((f:any)=>f.valueChoosed!==null)
  }

  increaseSkip(){
    this.skip+=9;
    this.getProducts();
    this.scrollToProducts();
  }
  decreaseSkip(){
    this.skip-=9;
    this.getProducts();
    this.scrollToProducts();
  }

  scrollToProducts(){
    this.productsEl.nativeElement.scrollIntoView();
  }
}


