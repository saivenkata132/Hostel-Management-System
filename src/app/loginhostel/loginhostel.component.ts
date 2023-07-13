import { Component } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';

declare var gapi :any;


@Component({
  selector: 'app-loginhostel',
  templateUrl: './loginhostel.component.html',
  styleUrls: ['./loginhostel.component.css']
})
export class LoginhostelComponent {
  HostelsList:any;
  private auth:any;
  // AdminsList:any;


constructor(private service:HostelService,private router:Router){
  this.service.getHstls().subscribe((data:any)=>{
    console.log(data)
    this.HostelsList=data;
  })

  // this.service.getAdmin().subscribe((admin:any)=>{
  //    console.log(admin)
  //     this.AdminsList=admin;
  //    })



}


ngOnInit() {


  gapi.load('auth2', () => {
    gapi.auth2.init({
      client_id: '791068067127-j9ujjgih8hd7t0rhf5oj4dpmkk9gof5k.apps.googleusercontent.com'
    });
  });
}

signInWithGoogle() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signIn().then((googleUser: { getAuthResponse: () => { (): any; new(): any; id_token: any; };  }) => {
    const idToken = googleUser.getAuthResponse().id_token;
    alert("hello login");
    // Call your backend API to authenticate the user using the ID token
  });
}





submitForm(loginForm: any) {

  if (loginForm.emailId === 'HR' && loginForm.password==='HR'){
    this.service.setLoginStatus();
     alert('WELCOME to HR Home Page')
  } else{
    this.HostelsList.forEach((HostelList:any) => {
     if(loginForm.emailId == HostelList.emailId && loginForm.password == HostelList.password){
      localStorage.setItem("HostelList",JSON.stringify(HostelList));
      this.service.setLoginStatus();
       alert('WELCOME to User Home Page')
       this.router.navigate(['hostelheader']); 
                     
     }
    });   
   }
   
}

// submitForm(loginForm: any) {

//   if (loginForm.emailId === 'HR' && loginForm.password==='HR'){
//     this.service.setLoginStatus();
//      alert('WELCOME to HR Home Page')
//   } else{
//     this.AdminsList.forEach((AdminList:any) => {
//      if(loginForm.emailId == AdminList.emailId && loginForm.password == AdminList.password){
//       localStorage.setItem("HostelList",JSON.stringify(AdminList));
//       this.service.setLoginStatus();
//        alert('WELCOME to User Home Page')
//       //  this.router.navigate(['hostelheader']); 
                     
//      }
//     });   
//    }
   
// }

  
}
