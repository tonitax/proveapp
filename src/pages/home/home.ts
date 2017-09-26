import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public countClick = 0;
  public bState = false;

  
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }
  
  
  getPosition() {
    this.geolocation.getCurrentPosition().then((position) => {
      alert(position.coords.latitude + " " + position.coords.longitude);
    });
  } 

	
  Botton_Press_Release(idBotton,idEvt)
   {
   switch(idBotton)
      {
	  case 'bN':
	        switch(idEvt)
			{
			case 'D':
			   console.log("Motor Nord = ON");
			   this.bState = true;
			   break; 
			case 'U':
			   console.log("Motor Nord = OFF");
			   this.bState = false;
			   break;
			case 'O':
			   if(this.bState==true)
			     {
			     console.log("Motor Nord = OFF");
				 this.bState = true;
				 }
			   break;
			}
			break;

	  case 'bS':
	        switch(idEvt)
			{
			case 'D':
			   console.log("Motor Sud = ON");
			   this.bState = true;
			   break; 
			case 'U':
			   console.log("Motor Sud = OFF");			
			   this.bState = false;
			   break;
			case 'O':
			   if(this.bState==true)
			     {
			     console.log("Motor Sud = OFF");
				 this.bState = true;
				 }
			   break;
			}
			break;

	  case 'bW':
	        switch(idEvt)
			{
			case 'D':
			   console.log("Motor West = ON");
			   this.bState = true;
			   break; 
			case 'U':
			   console.log("Motor West = OFF");			
			   this.bState = false;
			   break;
			case 'O':
			   if(this.bState==true)
			     {
			     console.log("Motor West = OFF");
				 this.bState = true;
				 }
			   break;   
			}
			break;

	  case 'bE':
	        switch(idEvt)
			{
			case 'D':
			   console.log("Motor Est = ON");
			   this.bState = true;
			   break; 
			case 'U':
			   console.log("Motor Est = OFF");			
			   this.bState = false;
			   break;
			case 'O':
			   if(this.bState==true)
			     {
			     console.log("Motor Est = OFF");
				 this.bState == true;
				 }
			   break;
			}
			break;

	  }
   }   
	
}
