import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor( private http:HttpClient ) { }

  url="http://localhost:8012/res"

  getAll(){
    return this.http.get(this.url+'/getproducts.php')
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
