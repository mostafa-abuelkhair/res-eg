import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from '../shared/services/products-api.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  product:any = {id:0, part_number:'', image:'',description:'',short_description:'',price:0 ,specifications:[]};
  product_specifications:{}[]=[];
  id;

  constructor(
    private route: ActivatedRoute,
    private api:ProductsApiService
  ) {this.id = this.route.snapshot.queryParamMap.get('id');}



  ngOnInit() {

      this.api.getProduct(Number(this.id)).subscribe(this.prepareProduct.bind(this));

  }

  
  prepareProduct(response:any){

    const titles = new Set();
    const specifications:any = [];

    response.specs.forEach( (e:any) => { titles.add(e.title) } );
    
    
    titles.forEach( (e:any) => {
    
    const specs:any=[];
    
    response.specs.forEach( (s:any) => { if (s.title===e){
    let {title, ...res} = s; 
    specs.push(res);
    }});
    
    specifications.push({title:e , specs: specs})
    
    } );

    response.specifications = specifications;
    this.product = response;

  }


}

