import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProductsApiService } from '../shared/services/products-api.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  constructor(private api:ProductsApiService){}

  onSubmit(f: NgForm) {
    this.api.sendMessage(f.value).subscribe( (response:any) => { 
        alert("Your message is sent, we will reply you on email soon.")
      });
  }

}
