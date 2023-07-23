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
    {name:'UPS Type', values:[['line interactive',1],['AVR',2],['Double conversion online',0]]},
    {name:'Rated Power In VA', values:[['500 - 800  VA',3],['1000 - 2000 VA',4],['2000 - 2200 VA',5],['3000 VA',6],['5000 VA',7],['6000 VA',8],['8000 VA',9],['10000 VA',10],['15000 VA',11],['20000 VA',12]]},
    {name:'Mounting mode', values:[['Rack-mounted',13],['Not rack-mountable',14]]},
    {name:'Series', values:[['APC Smart UPSs',15],['Easy UPSs 1 PH',16],['APC Back-UPS',17],['SE Easy UPS',18],['APC Line-R',19]]}
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


