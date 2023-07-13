// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { HostelService } from '../hostel.service';


// declare var toastr: any;
// @Component({
//   selector: 'app-gmail',
//   templateUrl: './gmail.component.html',
//   styleUrls: ['./gmail.component.css']
// })
// export class GmailComponent {
//   employee: any;

//   // user: SocialUser;
//   user:any;
//   emp: any;
//   constructor(private authService: AuthService, private router: Router, private service: HostelService) {

//   }
  
//   ngOnInit() {
//     /*Using Local Storage to retrieve logged data
// this.retrievedData = localStorage.getItem('employee');8
// this.employee = JSON.parse(this.retrievedData);
// console.log(this.employee); */

//   this.authService.authState.subscribe(async (user:any) => {
//     this.user = user;
//     if (user != null) {
//      await this.validateUser();
//     }
//   });
// }

//  signInWithGoogle(): void {
//  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
// }

// // signInWithFB(): void {
// //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
// // }

// // signInWithLinkedIn(): void {
// //   this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
// // }

// signOut(): void {
//   this.authService.signOut();
// }

//   /*Using Local Storage to retrieve logged data
// this.retrievedData = localStorage.getItem('employee');
// this.employee = JSON.parse(this.retrievedData);
// console.log(this.employee); */


// async validateUser() {
//   console.log('Inside validateUser');
//   // if (loginForm.loginId === 'admin'  && loginForm.password === 'admin') {
//   //   this.service.setUserLoggedIn();
//   //   this.router.navigate(['products']);
//   // }

//   await this.service.getEmpByEmail(this.user.email).then((data: any) => {
//     if (data != null) {
//     this.service.setUserLoggedIn();
//     localStorage.setItem('employee', 'JSON.stringify(data)'); // set values to local storage like session
//     this.router.navigate(['products']);
//     toastr.success('Login', 'Login Success');
//   } else {
//     toastr.success('Login', 'Login Failure');
//   }
//      },
//   (error) => {
//       toastr.success('Login', 'Login Failure');
//        });
//    }
//   }

