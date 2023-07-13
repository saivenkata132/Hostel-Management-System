import { Component } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',                             
  styleUrls: ['./card.component.css']       
})
export class CardComponent {

  HostelsList:any;
  constructor(private service : HostelService ){
      this.service.getHstls().subscribe((data:any)=>{
        console.log(data)
        this.HostelsList=data;
      })
    }


 registerHstl(hostel : any) {
    prompt("hii hello");


}
}
