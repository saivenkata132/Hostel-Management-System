import { Component, OnInit } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';

declare var jQuery : any;


@Component({
  selector: 'app-showcustomers',
  templateUrl: './showcustomers.component.html',
  styleUrls: ['./showcustomers.component.css']
})

export class ShowcustomersComponent implements OnInit {
  customers :any;
  editObject: any;
  currentuser:any;
empName:any;
  constructor(private service:HostelService, private router:Router){
    this.service.getCustomers().subscribe((data: any)=>{
      console.log(data);
      this.customers = data;                               
    })                                                  
    this.empName={empName:''};
    this.editObject = {userId: '', firstName: '',  lastName: '', number: '' , userEmail: '', password: ''};
  }
  ngOnInit(): void {
    let Userdata=JSON.parse(localStorage.getItem('UserList')|| '{}');
    this.currentuser=Userdata;
    console.log(this.currentuser);
    
  }
  setLogoutStatus(){
    this.service.setLogoutStatus();
    this.service.ShowSuccess('Logout successfully',' ')
    this.router.navigate(['login'])

  }

  deleteCust(custId: number){
    this.service.deleteCust(custId).subscribe((data)=>{
    const index = this.customers.findIndex((customer:any)=>{
        return customer.custId === custId;
      });
      this.customers.splice(index,1);
    });
    }

    showEditPopup(currentuser: any) {
      this.editObject = currentuser;
      jQuery('#empModel').modal('show');
    }
    updateCust() {
      this.service.updateCust(this.editObject).subscribe();
      console.log(this.editObject);
    }

}
