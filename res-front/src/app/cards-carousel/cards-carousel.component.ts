import { Component } from '@angular/core';
import { scan } from 'rxjs';

@Component({
  selector: 'app-cards-carousel',
  templateUrl: './cards-carousel.component.html',
  styleUrls: ['./cards-carousel.component.css']
})
export class CardsCarouselComponent {

  lor="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus itaque fugiat consequatur omnis laudantium tempora eveniet illum iste sit. Iste dolores nisi asperiores consectetur consequuntur fugit perferendis iure sint ab."

  cardChosen = -1;
  
  cards = [ 
            {src:"../../assets/ex.png", p:this.lor },
            {src:"../../assets/ex.png", p:this.lor },
            {src:"../../assets/ex.png", p:this.lor },
            {src:"../../assets/ex.png", p:this.lor },
            {src:"../../assets/ex.png", p:this.lor },
            {src:"../../assets/ex.png", p:this.lor },
            {src:"../../assets/ex.png", p:this.lor },
            {src:"../../assets/ex.png", p:this.lor },
            {src:"../../assets/ex.png", p:this.lor },
            {src:"../../assets/ex.png", p:this.lor }
          ];



  cardStyle(i:number){

    let p = this.cards.length - 1 - i;
    p = Math.floor(p/2);

    let style:any = {}

    if (i === this.cardChosen){ 

      style.top = "0%";
      style.scale = 1;
      style["z-index"]=1

      if(i%2){ style.left="37.5%" }

      else{ style.right="37.5%" }

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
