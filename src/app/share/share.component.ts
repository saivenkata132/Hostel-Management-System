import { Component } from '@angular/core';
import { HostelService } from '../hostel.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  constructor(private service:HostelService, private router:Router){

  }



  setLogoutStatus(){
    this.service.setLogoutStatus();
    this.service.ShowSuccess('Logout successfully',' ')
    // Swal.fire({
    //   title: 'Are you sure?',
     
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes',
    //   cancelButtonText: 'No',
    // }).then((result) => {
    //   if (result.value) {
    //     Swal.fire('Logout sucessfull', 'Are you sure to exit .', 'success');
    //     this.router.navigate(['login']);
    //   } else if (result.dismiss === Swal.DismissReason.cancel) {
    //     Swal.fire('Cancelled');
    //   }
    // });
  }

}
