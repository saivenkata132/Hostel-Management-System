import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostelregistrationComponent } from './hostelregistration/hostelregistration.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { CardComponent } from './card/card.component';
import { LoginhostelComponent } from './loginhostel/loginhostel.component';
import { HostelheaderComponent } from './hostelheader/hostelheader.component';
import { ShowhostelsComponent } from './showhostels/showhostels.component';
import { PaymentsComponent } from './payments/payments.component';
import { ShareComponent } from './share/share.component';
import { Header2Component } from './header2/header2.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BillComponent } from './bill/bill.component';

const routes: Routes = [
// {
//   path:'header',component:HeaderComponent,
//   children:
//   [
//     {
//       path:'login',component:LoginComponent
//      },
//      {
//       path:'register',component:RegisterComponent
//      },
//      {
//       path:'about',component:AboutComponent
//      },
//   ]
// },


// {
//   path:'login',component:LoginComponent,
//   children:
//   [
//     {
//       path:'header2',component:Header2Component
//      },
//      {
//       path:'share',component:ShareComponent
//      },
//      {
//       path:'payments',component:PaymentsComponent
//      },
//   ]
// }



{path:'register',component:RegisterComponent},
{path:'userheader',component:UserheaderComponent},
{path:'showhostels',component:ShowhostelsComponent},
{path:'showcustomers',component:ShowcustomersComponent},
{path:'hostelregistration',component:HostelregistrationComponent},
{path:'login',component:LoginComponent},
{path:'loginhostel',component:LoginhostelComponent},
{path:'userheader/showcustomers',component:ShowcustomersComponent},
{path:'card',component:CardComponent},
{path:'loginhostel/hostelregistration',component:HostelregistrationComponent},
{path:'login/register',component:RegisterComponent},
{path:'userheader/login',component:LoginComponent},
{path:'hostelheader/loginhostel',component:LoginhostelComponent},
{path:'register/login',component:LoginComponent},
{path:'hostelregistration/loginhostel',component:LoginhostelComponent},
{path:'login/register/login',component:LoginComponent},
{path:'loginhostel/hostelregistration/loginhostel',component:LoginhostelComponent},
{path:'hostelheader',component:HostelheaderComponent},
{path:'hostelheader/showhostels',component:ShowhostelsComponent},
{path:'share/payments',component:PaymentsComponent},
{path:'share',component:ShareComponent},
{path:'header2',component:Header2Component},
{path:'header2/share',component:ShareComponent},
{path:'header2/share/payments',component:PaymentsComponent},
{path:'about',component:AboutComponent},
{path:'',component:HeaderComponent},
{path:'header',component:HeaderComponent},
{path:'home',component:HomeComponent},
{path:'header2/home',component:HomeComponent},
{path:'header2/share/payments2',component:PaymentsComponent},
{path:'header2/share/payments3',component:PaymentsComponent},
{path:'header2/share/payments/login',component:LoginComponent},
{path:'header2/share/payments2/login',component:LoginComponent},
{path:'header2/share/payments3/login',component:LoginComponent},
// {path:'',component:HeaderComponent},
{path:'header2/login',component:LoginComponent},
{path:'header2/showcustomers',component:ShowcustomersComponent},
{path:'header2/share/payments/header2',component:Header2Component},
{path:'header2/share/payments/header2/login',component:LoginComponent},
{path:'hostelheader/hostelregistration',component:HostelregistrationComponent},
{path:'hostelheader/login',component:LoginComponent},
{path:'header2/header',component:HeaderComponent},
{path:'header2/header/login',component:LoginComponent},
{path:'hostelheader/userheader',component:UserheaderComponent},
{path:'header2/showcustomers/header2',component:Header2Component},
{path:'header2/showcustomers/header2/share',component:ShareComponent},
{path:'bill',component:BillComponent},
{path:'header2/share/payments/bill',component:BillComponent},
{path:'login/about',component:AboutComponent},
{path:'register/about',component:AboutComponent},
{path:'header2/bill',component:BillComponent},
{path:'hostelheader/userheader/login',component:LoginComponent},
{path:'hostelheader/userheader/login',component:LoginComponent},
{path:'hostelheader/hostelregistration/showhostels',component:ShowhostelsComponent},
{path:'hostelheader/showhostels/hostelregistration',component:HostelregistrationComponent},
{path:'hostelheader/showhostels/userheader',component:UserheaderComponent},
{path:'hostelheader/userheader/showhostels',component:ShowhostelsComponent},
{path:'hostelheader/hostelregistration/showhostels/hostelregistration',component:HostelregistrationComponent},
{path:'header2/share/payments/header2/bill',component:BillComponent},
{path:'header/login',component:LoginComponent},
{path:'header/register',component:RegisterComponent},
{path:'header/login/register',component:RegisterComponent},
{path:'header/register/login',component:LoginComponent},
{path:'header/login/register/login',component:LoginComponent},
{path:'hostelheader/showhostels/userheader/hostelregistration',component:HostelregistrationComponent},
{path:'hostelheader/showhostels/hostelregistration',component:HostelregistrationComponent},




















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }             