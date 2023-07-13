import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { HostelregistrationComponent } from './hostelregistration/hostelregistration.component';
import { ShowhostelsComponent } from './showhostels/showhostels.component';
import { ImageComponent } from './image/image.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { CardComponent } from './card/card.component';
import { HostelheaderComponent } from './hostelheader/hostelheader.component';
import { LoginhostelComponent } from './loginhostel/loginhostel.component';
import { PaymentsComponent } from './payments/payments.component';
import { Header2Component } from './header2/header2.component';
import { ShareComponent } from './share/share.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Payments2Component } from './payments2/payments2.component';
import { Payments3Component } from './payments3/payments3.component';
import { AdminComponent } from './admin/admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BillPipe } from './bill.pipe';
import { BillComponent } from './bill/bill.component';
import { SsPipe } from './ss.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ShowcustomersComponent,
    HostelregistrationComponent,
    ShowhostelsComponent,
    ImageComponent,
    OtpVerificationComponent,
    UserheaderComponent,
    CardComponent,
    HostelheaderComponent,
    LoginhostelComponent,
    PaymentsComponent,
    Header2Component,
    ShareComponent,
    AboutComponent,
    HomeComponent,
    Payments2Component,
    Payments3Component,
    AdminComponent,
    BillPipe,
    BillComponent,
    SsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot({
      positionClass:'toast-top-right',preventDuplicates:true,timeOut:5000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
