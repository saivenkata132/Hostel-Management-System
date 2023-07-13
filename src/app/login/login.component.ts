import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostelService } from '../hostel.service';

declare var gapi :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    UsersList :any;
  private auth:any;
 

  constructor(private service:HostelService, private router:Router) { 
    this.service.getCustomers().subscribe((data:any)=>{
      console.log(data)
      this.UsersList=data;         
    })

    

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
    alert("hellooooooo");
    const idToken = googleUser.getAuthResponse().id_token;
    alert("hello login");
    // Call your backend API to authenticate the user using the ID token
  });
}
                                                            
  submitForm(loginForm: any) {

    if (loginForm.userEmail === 'ADMIN' && loginForm.password==='ADMIN'){
      this.service.setLoginStatus();
      this.service.ShowSuccess('Login successfully','Welcome To Hostel Management System')
       this.router.navigate(['hostelheader']);
    } else {
      this.UsersList.forEach((UserList:any) => {
       if(loginForm.userEmail == UserList.userEmail && loginForm.password == UserList.password && UserList.enabled==true ){
        this.service.setMail(loginForm.userEmail);
        localStorage.setItem("UserList",JSON.stringify(UserList));
        this.service.setLoginStatus();
         this.service.ShowSuccess('Login successfully' , 'Welcome To Hostel Management System ')
         this.router.navigate(['header2']); 
        
       }
      });
     }

  }


  
}
