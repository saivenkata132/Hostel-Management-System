import { Component, OnInit } from '@angular/core';
import { HostelService } from '../hostel.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  input:any;
  list:any;
  mail:any;
  date = new Date();
  hostels:any;
  
  constructor(private service:HostelService, private router:Router){
   
   
    
// this.mail='s';
// this.service.setMail('raju@gmail.com');

    this.input= this.service.getMail();
    this.service.getByEmail(this.input).subscribe((data:any)=>{
      console.log(data);
this.list=data;


    })
  }
  ngOnInit(): void {
                       
  }
  
  setLogoutStatus(){
    this.service.setLogoutStatus();
    this.service.ShowSuccess('Logout successfully' , ' ')
  this.router.navigate(['header']);
    
  }


}