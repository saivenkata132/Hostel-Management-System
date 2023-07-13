import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';
import { Share } from '../share';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent  implements OnInit{
title ='testproj';

employee!: Share[];
empSelected:any;
price: any;
message:any;
bookList:any;
mail:any;
// gmail:any;

changeShare(event:any){
console.log(event.target.value);
this.empSelected=event.target.value;
}

constructor(private service:HostelService, private router:Router){
  this.service.getBooking().subscribe((data:any)=>{
    console.log(data)
    this.bookList=data;         
  })

  // this.gmail='sai@gmail.com';

  // this.service.setMail(this.gmail);

  this.mail=this.service.getMail();
  console.log(this.mail);
 
  
}

// ngOnInit():void{
   
 
// }


ngOnInit(){
  this.invokeStripe();
  this.employee=[
  {share:"3share",price:" Rs 7500"},
  {share:"2share",price:" Rs 8500"},
  {share:"1share",price:" Rs 10000"},
  ];
  
  this.empSelected="7500Rs";


  this.service.setMessage(this.message);
  }  

bookCust(booking : any) {
  this.message=booking;
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
      this.service.ShowSuccess('Payment done successfully','See Your Booking orders in Home page')
      // this.router.navigate(['login']);
     
    },
       
      });
      paymentHandler.open({
        // name:'Vamsi',
        // description:'1 Room added',
        
        // amount:amount * 100,         
      });
      // this.router.navigate(['bill']);

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