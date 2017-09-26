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
  public myOutput = '';
  public press : number = 0;

  
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }
  
  
  getPosition() {
    this.geolocation.getCurrentPosition().then((position) => {
      alert(position.coords.latitude + " " + position.coords.longitude);
    });
  } 
  pressEvent(e) {
    this.press++
  }
	
  Botton_Press_Release(idBotton,idEvt)
   {
   switch(idBotton)
      {
	  case 'bN':
	        switch(idEvt)
			{
			case 'D':
				this.myOutput = "Motor Nord = ON";
			   console.log("Motor Nord = ON");
			   this.bState = true;
			   break; 
			case 'U':
				this.myOutput = "Motor Nord = OFF";
			   console.log("Motor Nord = OFF");
			   this.bState = false;
			   break;
			case 'O':
			   if(this.bState==true)
			     {
				this.myOutput = "Motor Nord = LEAVE";
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
