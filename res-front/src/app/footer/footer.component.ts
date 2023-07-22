import { Component } from '@angular/core';
import { ProductsApiService } from '../shared/services/products-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private api:ProductsApiService){}

  subscriber:string = '';

  addSubscriber(){

    if(/\S+@\S+\.\S+/.test(this.subscriber)){

      
      this.api.PostSubscriber(this.subscriber).subscribe( (response:any) => { 
      alert('Thanks we will send new offers');
      this.subscriber="";
      });
      
    }
    else{
      alert("Not valid email, please enter a valid email address")
    }

  }

}
