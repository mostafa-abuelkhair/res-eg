import { Component } from '@angular/core';
import { ProductsApiService } from 'src/app/shared/services/products-api.service';


type card = {id:number,reference:string,image:string,description:string};


@Component({
  selector: 'app-cards-carousel',
  templateUrl: './cards-carousel.component.html',
  styleUrls: ['./cards-carousel.component.css']
})
export class CardsCarouselComponent{
  
  constructor(private api:ProductsApiService){}

  cards:card[]=[];

  cardChosen = this.cards.length;

  tim:any;
  timout:any;


  ngOnInit() {

      document.addEventListener('aos:in:carousel', this.startCards.bind(this));

      this.api.getCarousel().subscribe( (response:any) => { 
        this.cards = response;
        this.cardChosen = this.cards.length;
      });

      this.startCards()
    
  }

  startCards(){
    clearInterval(this.tim);
    this.cardChosen=this.cards.length;
    clearTimeout(this.timout);
    this.timout = setTimeout(this.changeCard.bind(this), 1000);
    this.setTimer();
  }

  setTimer(){ this.tim =  setInterval(this.changeCard.bind(this), 5000);}

  changeCard(){
    if (this.cardChosen === 0) this.cardChosen=this.cards.length-1;
    else this.cardChosen--
  }

  cardChoose(i:number){
    this.cardChosen=i;
    clearInterval(this.tim);
    this.setTimer();
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
