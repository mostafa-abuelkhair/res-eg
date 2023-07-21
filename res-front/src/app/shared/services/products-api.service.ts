import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor( private http:HttpClient ) { }

  url="http://localhost:8012/res"

  getAll(skip:number = 0,filters:any= []){

    let filterValues:string[]=[];
    let filterNames:string[] =[];
    filters.forEach( (filter:any) => {
        filterValues.push( filter.values[filter.valueChoosed][0] );
        filterNames.push( filter.values[filter.valueChoosed][1] || filter.name );
    });

    return this.http.get(this.url+`/getproducts.php?skip=${skip}&filters=${filterNames.join(',')}&values=${filterValues.join(',')}`);
    
  }

  getProduct(id:number){
    return this.http.get(this.url+'/getproduct.php?id='+id)
  }

  getCarousel(){
    return this.http.get(this.url+'/getcarousel.php')
  }

  getFeatured(){
    return this.http.get(this.url+'/getfeatured.php')
  }


  /*this.api.getAll().subscribe( (response:any) => { 
    console.log(response);
  });*/

}
