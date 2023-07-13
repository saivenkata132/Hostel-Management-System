import { Component } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  AdminList:any;

  constructor(private service : HostelService, private router:Router){
    // constructor(private service:HostelService, private router:Router) { 
      this.service.getHstls().subscribe((data:any)=>{
        console.log(data)
        this.AdminList=data;
      })
    }


    // registeradmin(hostel : any) {
    //   alert("hii hello");
    //   console.log(hostel);
    //   this.service.registerAdmin(hostel).subscribe();
    //   this.router.navigate(['loginhostel']); 
    
    // }
  

}
