import { Component } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments2',
  templateUrl: './payments2.component.html',
  styleUrls: ['./payments2.component.css']
})
export class Payments2Component {
title ='testproj';
constructor(private service:HostelService, private router:Router){

}

ngOnInit():void{
  this.invokeStripe();
}

bookCust(booking : any) {
  alert("hii hello");
  console.log(booking);
  this.service.BookCust(booking).subscribe(); 
  // this.router.navigate(['login']);      

}





makePayment(amount:any){
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key:
    'pk_test_51MtDb0SAxSU5fuVN53GemVSitqTjYFP6T8vAaKZATpl956ypFygQJBRuOI2qeAdpEOa1MtPKN9zaFgbzHXtJGl7W00j3xnMD0d',


    locale:'auto',
    token: function (stripeToken: any){
      console.log(stripeToken.card);
      alert('Payment Sucessful!');
      this.router.navigate(['header2']); 
    },
       
      });
      paymentHandler.open({
        // name:'Vamsi',
        description:'1 Room added',
        amount:10000,
      });

    }
 
invokeStripe(){
  if(!window.document.getElementById('stripe-script'))  {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    window.document.body.appendChild(script);
  }
}
}