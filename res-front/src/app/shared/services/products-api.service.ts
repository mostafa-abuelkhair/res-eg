import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor( private http:HttpClient ) { }

  url="http://localhost:8012/res"

  getAll(skip:number = 0,filters:any= []){

    let filtersIndex:string[] =[];
    filters.forEach( (filter:any) => {
      filtersIndex.push( filter.values[filter.valueChoosed][1]);
    });

    return this.http.get(this.url+`/getproducts.php?skip=${skip}&filters=${filtersIndex.join(',')}`);
    
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

  PostSubscriber(email:string){
    return this.http.post(this.url+'/subscribe.php',{subscriber:email})
  }

  sendMessage(body:any){
    return this.http.post(this.url+'/message.php',body)
  }

  /*this.api.getAll().subscribe( (response:any) => { 
    console.log(response);
  });*/

}
