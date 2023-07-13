import { Component } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component {
 hostels:any;
 editObject:any;
 term:any;
//  Swal:any;
//  result:any;

  // room1 :any ;
  // room2 :any ;
  // room3 :any ;
  // room4 :any ;
  // room5 :any ;
  // room6 :any ;
  // room7:any;

  constructor(private service:HostelService, private router:Router){
    this.service.getHstls().subscribe((data: any)=>{
      console.log(data);
      this.hostels = data;
    })
    
    this.editObject = {hst_Id: '', hst_name: '',  owner_nam: '', emailId:'', hst_num: '' , area: ''};
  }

//  this.room1 = {"Id" : 101 , "Name" : "Zostel Hostel " ,"desc" : "Zostel Hostel,Jubilee Hills"}
//  this.room2 =  {"Id" : 102 , "Name" : "SlackPackr Hostel" ,"desc" : "SlackPackr Hostel,HiTec City"}
//  this.room3 = {"Id" : 103, "Name" : "Freshup Hostel " , "desc" : "Freshup Hostel,Secunderabad" }
//  this.room4 =  {"Id" : 104 , "Name" : "Imperia Suites" , "desc" : "Imperia Suites,Jubilee Hills "}
//  this.room5 =  {"Id" : 105 , "Name" : "Falcon Nest Hostel" ,"desc" : "Falcon Nest Hostel,Banjara Hills "}
//  this.room6 =  {"Id" : 106 , "Name" : "Nest Hostel " , "desc" : "Nest Hostel,Madhapur"}


  
  setLogoutStatus(){
    // this.service.setLogoutStatus();
    //  
      Swal.fire({
      title: 'Are you sure?',
     
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Logout sucessfull', 'Are you sure to exit .', 'success');
        this.service.setLogoutStatus();
        this.router.navigate(['header']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled');
      }
    });
    // this.service.ShowSuccess('Logout successfully' , ' ') 
  }

}