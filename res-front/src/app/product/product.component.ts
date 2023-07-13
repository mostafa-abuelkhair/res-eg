import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(
    private route: ActivatedRoute
  ) {}

  product:any;

  ngOnInit() {


    this.product = this.route.snapshot.queryParamMap.get('id');
 
    this.product ={
      src:"assets/p10.JPG",
      des:"APC Easy UPS 1 Ph Line Interactive, 1000VA, Tower, 230V, 4 Schuko CEE 7 outlets, AVR, LCD",
      serial:"SMV1000I-GR",
      specifications:[
      {'title':'Main',specs:[ 
        ['Max Load Runtime','3min 23s'],
        ['Main Input Voltage','230 V'],
        ['Input voltage','220V 240V'],
        ['Main Output Voltage','230 V'],
        ['rated power in W', '700 W'],
        ['Rated power in VA','1000 VA'],
        ['Input Connection Type','IEC 60320 C14'],
        ['Battery type','Lead-acid battery'] 
      ]},
      {'title':'Battery',specs:[
        ['Number of battery filled slots','0'],
        ['Number of battery free slots','0'],
        ['Battery recharge time','4 h'],
        ['Battery voltage','24 V'],
        ['Battery charger power','37 W rated'],
        ['Battery life','3…5 year(s)'],
        ['Replacement battery','APCRBCV206']
      ]},
        {'title':'General', specs:[
        ['Number of power module free slots','0'],
        ['Number of power module filled slots','0'],
        ['Redundant', 'No'],
        ['UPS size','WS']
      ]}

      ]
      
    }


  }



}

