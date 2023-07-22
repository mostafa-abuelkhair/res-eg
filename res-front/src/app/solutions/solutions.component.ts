import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductsApiService } from '../shared/services/products-api.service';
import { ActivatedRoute } from '@angular/router';

type product = {id:number,part_number:string,image:string,description:string,short_description:string,category_id:number,price:number};


@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {

  @ViewChild('productsEl') productsEl:ElementRef | undefined; 

  filters_data  = [
    {name:'UPS type', values:[['line interactive'],['AVR'],['Double conversion online']]},
    {name:'Rated power in VA', values:[['600 VA'],['1000 VA'],['2000 VA'],['5000 VA'],['6000 VA'],['8000 VA'],['10000 VA'],['20000 VA']]}
  ]

  filters:any=this.filters_data.map((filter)=>{ return {...filter,class:'list-hide', valueChoosed:null} });

  products:product[] = [];

  skip = 0;

  count = 0;

  preload=true;


  constructor(private route: ActivatedRoute, private api:ProductsApiService){}

  ngOnInit() {

    this.addFiltersFromRoute();
    this.getProducts();

  }

  addFilter(filterIndex:number, valueIndex:number){
    this.filters[filterIndex].valueChoosed=valueIndex;
    this.skip=0;
    this.getProducts();
    this.scrollToProducts();
  }

  addFiltersFromRoute(){
    const filter = this.route.snapshot.queryParamMap.get('f');
    if(filter !== null && filter!="" ){
      try{
        const filterA = filter.split(',');
        this.filters[filterA[0]].valueChoosed=filterA[1];
      }
      catch{}
    }
  }


  getProducts(){

    this.preload=true;
    this.products=[];
    
    this.api.getAll(this.skip , this.getFiltersChoosed()).subscribe( (response:any) => { 
      this.products = response.products;
      this.count = Number(response.count);

      this.preload=false;
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
    if(this.productsEl!==undefined) this.productsEl.nativeElement.scrollIntoView();
  }
}


