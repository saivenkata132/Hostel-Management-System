import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
message:any;
mail:any;

  bookCust(customer: any) {
    throw new Error('Method not implemented.');
  }
  
  private loginStatus: boolean;
  private logoutStatus: boolean;


  constructor(private httpClient:HttpClient,private toast: ToastrService) {
    this.loginStatus = false;
    this.logoutStatus = true;
    
    
  }

  //toaster messages
  Showerror(title:any, message:any) {
    this.toast.error (message, title,{

  });
  
  }
  Showwarning(title: any, message:any){ 
    this.toast.warning (message, title);
  }

  ShowSuccess(title: any, message: any){

    this.toast.success(message, title,{ 
      easing: 'ease-in', 
      easeTime: 1000
    });
  }

  Showinfo(title: any, message:any){ 
    this.toast.warning (message, title);
  }
  getLoginStatus(){
    return this.loginStatus;
   }

   getLogoutStatus(){
    return this.logoutStatus;
   }

   setLoginStatus(){                                              
    return this.loginStatus = true;
   }

   setLogoutStatus(){
    return this.loginStatus = false;
   }

  registerCust(customer:any){
    console.log(customer); 
  return this.httpClient.post('registerUser', customer);       
 }
 getCustomers(){
  // console.log(customer); 
  return this.httpClient.get('getAllUsers');
 }

 deleteCust(custId:any){
  this.toast.success('deleted User Successfully')
  return this.httpClient.delete('deleteUser/' + custId );
 }

 updateCust(editObject: any) {
  this.toast.success('Updated details Successfully')
  return this.httpClient.put('updateUser', editObject);
 }

 registerHstl(hstl:any){
  console.log(hstl); 
return this.httpClient.post('registerHostels', hstl);       
}
getHstls(){
  return this.httpClient.get('getAllHostels');
 }

deleteHstl(hstlId:any){ 
  this.toast.success('Deleted Hostel Successfully')
  return this.httpClient.delete('deleteHostels/' + hstlId );
 }

 updateHstl(editObject: any) {
  this.toast.success('Updated details Successfully')
  return this.httpClient.put('updateHostels', editObject);
 }

 

otpsend(phonenumber:any){
  return this.httpClient.post('mobileNo', phonenumber); 
}

BookCust(booking:any){
  console.log(booking); 
return this.httpClient.post('registerBookingDetails', booking);       
}




setMessage(data:any){
this.message=data;
}
getMessage(){
  return this.message;
}

getBooking(){
  return this.httpClient.get('getAllBookingDetails');
 }
 setMail(data:any){
  this.mail=data;
  }
  getMail(){
    return this.mail;
  }

  getByEmail(email:any){
    return this.httpClient.get('getDepartmentByemail/'+email);
  }

  getbilldetails(){
    return this.httpClient.get('getAllBookingDetails');
  
    
  }

   


}