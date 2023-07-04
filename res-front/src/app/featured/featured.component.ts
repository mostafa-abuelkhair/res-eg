import { Component } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {

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

}
