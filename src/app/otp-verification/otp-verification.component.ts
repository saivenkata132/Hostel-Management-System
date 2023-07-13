import { Component } from '@angular/core';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  otp:any;
  verifyOtp() {
    // Here, you can perform the OTP validation check
    if (this.otp === '1234') {
      alert('OTP verified successfully!');
    } else {
      alert('Invalid OTP');
    }
  }

}
