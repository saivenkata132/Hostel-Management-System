import { Component, OnInit } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';


declare var jQuery : any;


@Component({
  selector: 'app-showhostels',
  templateUrl: './showhostels.component.html',
  styleUrls: ['./showhostels.component.css']
})
export class ShowhostelsComponent implements OnInit {
hostels:any;
editObject:any;
currentuser:any;
term:any;

constructor(private service:HostelService, private router:Router){
  this.service.getHstls().subscribe((data: any)=>{
    console.log(data);
    this.hostels = data;
  })
  
  this.editObject = {hst_Id: '', hst_name: '',  owner_nam: '', emailId:'', hst_num: '' , area: ''};
}

ngOnInit(): void {
  let Hosteldata=JSON.parse(localStorage.getItem('HostelList')|| '{}');
  this.currentuser=Hosteldata;
  console.log(this.currentuser);
  
}

setLogoutStatus(){
  this.service.setLogoutStatus();
  this.service.ShowSuccess('Logout successfully',' ')
  this.router.navigate(['login'])
}

  deleteHstl(hst_Id: any){
    this.service.deleteHstl(hst_Id).subscribe((data)=>{
    const index = this.hostels.findIndex((hostel:any)=>{
        return hostel.hst_Id === hst_Id;
      });
      this.hostels.splice(index,1);
    });
    }


    showEditPopup(hostel: any) {
      this.editObject = hostel;
      jQuery('#empModel').modal('show');
    }
    updateHstl() {
      this.service.updateHstl(this.editObject).subscribe();
      console.log(this.editObject);
    }


}
