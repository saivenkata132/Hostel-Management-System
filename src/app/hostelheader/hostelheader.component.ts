import { Component } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hostelheader',
  templateUrl: './hostelheader.component.html',
  styleUrls: ['./hostelheader.component.css']
})
export class HostelheaderComponent {


  // constructor(private service:HostelService, private router:Router){
  //   // this.service.getCustomers()

  // }
  // setLogoutStatus(){
  //   this.service.setLogoutStatus();
  //   this.service.ShowSuccess('Logout successfully' , ' ')
  //   this.router.navigate(['login'])

  // }
  HostelsList:any;
  constructor(private service : HostelService, private router:Router){
      this.service.getHstls().subscribe((data:any)=>{
        console.log(data)
        this.HostelsList=data;
      })
    }

    setLogoutStatus(){
      // this.service.setLogoutStatus();
      // this.service.ShowSuccess('Logout successfully' , ' ')
      // this.router.navigate(['header']);
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
    }



  registerhstl(hostel : any) {
    console.log(hostel);
    this.service.registerHstl(hostel).subscribe();
    this.service.ShowSuccess('Hostel adding successfully' , ' ')
  
  }


}
