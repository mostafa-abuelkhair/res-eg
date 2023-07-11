import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {

  filters_data  = [
    {name:'Type', values:['line interactive','AVR','Online']},
    {name:'Rated Power in VA', values:['600','1000','2000','5000','6000','8000','10000','20000']}
  ]

  filters=this.filters_data.map((filter)=>{ return {...filter,class:'list-hide'} });

  products = [ 
    {src:"../../assets/p10.JPG", p:"Easy UPS 1 Ph On-Line" },
    {src:"../../assets/p9.JPG", p:"Network Management Cards"},
    {src:"../../assets/p8.JPG", p:"Easy UPS 1 Ph On-Line, rail" },
    {src:"../../assets/p7.JPG", p:"Easy UPS 1 Ph On-Line" },
    {src:"../../assets/p6.JPG", p:"APC Easy UPS" },
    {src:"../../assets/p5.JPG", p:"Network Power supply with battery backup" },
    {src:"../../assets/p4.JPG", p:"APC Easy UPS 1 Ph Line Interactive"},
    {src:"../../assets/p3.JPG", p:"APC Easy UPS, 1000VA " },
    {src:"../../assets/p2.JPG", p:"Easy UPS 1 Ph On-Line" },
    {src:"../../assets/p1.JPG", p:"Easy UPS 1 Ph On-Line" }
  ];

  ngOnInit() {

  }

}
