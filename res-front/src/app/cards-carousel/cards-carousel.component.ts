import { Component } from '@angular/core';


@Component({
  selector: 'app-cards-carousel',
  templateUrl: './cards-carousel.component.html',
  styleUrls: ['./cards-carousel.component.css']
})
export class CardsCarouselComponent{

  lor="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus itaque fugiat consequatur omnis laudantium tempora eveniet illum iste sit. Iste dolores nisi asperiores consectetur consequuntur fugit perferendis iure sint ab."
  
  cards = [ 
            {src:"../../assets/p10.JPG", p:"Easy UPS 1 Ph On-Line, 3kVA, Rackmount 4U, 230V, 6x IEC C13 + 1x IEC C19 outlets, Intelligent Card Slot, LCD, Extended Runtime, W/ rail kit" },
            {src:"../../assets/p9.JPG", p:"Network Management Card for Easy UPS, 1-Phase"},
            {src:"../../assets/p8.JPG", p:"Easy UPS 1 Ph On-Line, 3kVA, Rackmount 2U, 230V, 6x IEC C13 + 1x IEC C19 outlets, Intelligent Card Slot, LCD, W/ rail kit" },
            {src:"../../assets/p7.JPG", p:"Easy UPS 1 Ph On-Line, 6kVA/6kW, Tower, 230V, 1x Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD" },
            {src:"../../assets/p6.JPG", p:"APC Easy UPS, 900VA, Tower, 230V, 2x CEE 7/3 Schuko outlets, AVR" },
            {src:"../../assets/p5.JPG", p:"Network Power supply with battery backup, 12Vdc, 1A, CEE7, lithium battery" },
            {src:"../../assets/p4.JPG", p:"APC Easy UPS 1 Ph Line Interactive, 1500VA, Tower, 230V, 6 IEC C13 outlets, AVR, LCD"},
            {src:"../../assets/p3.JPG", p:"APC Easy UPS, 1000VA, Floor/Wall Mount, 230V, 4x CEE 7/3 Schuko outlets, AVR" },
            {src:"../../assets/p2.JPG", p:"Easy UPS 1 Ph On-Line, 2000VA, Tower, 230V, 4x IEC C13 outlets, Intelligent Card Slot, LCD" },
            {src:"../../assets/p1.JPG", p:"Easy UPS 1 Ph On-Line, 1000VA, Tower, 230V, 3x IEC C13 outlets, Intelligent Card Slot, LCD, Extended runtime" }
          ];

  cardChosen = this.cards.length;

  tim:any;


  ngOnInit() {
    setTimeout(this.changeCard.bind(this), 500);
    this.tim = this.setTimer();
  }

  setTimer(){return setInterval(this.changeCard.bind(this), 5000);}

  changeCard(){
    if (this.cardChosen === 0) this.cardChosen=this.cards.length-1;
    else this.cardChosen--
  }

  cardChoose(i:number){
    this.cardChosen=i;
    clearInterval(this.tim);
    this.tim = this.setTimer();
  }

  cardStyle(i:number){

    let p = this.cards.length - 1 - i;
    p = Math.floor(p/2);

    let style:any = {}

    if (i === this.cardChosen){ 

      style.top = "0%";
      style.scale = 1;
      style["z-index"]=1;
      style.filter= "brightness(100%)";
      style.width = "36%";

      if(i%2){ style.left="32%" }

      else{ style.right="32%" }

    }
    else{

      style.top = `${p * 7}%`;
      style.scale = 1- p*0.1;
      

      if(i%2){ style.left=`${p * 7}%` }

      else{ style.right=`${p * 7}%` }

    }

    return style;
  }


}
