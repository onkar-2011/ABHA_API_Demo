import { Component, OnInit } from '@angular/core';
import { AbhaService } from '../service/abha.service';

@Component({
  selector: 'app-abhaNew',
  templateUrl: './abhaNew.component.html',
  styleUrls: ['./abhaNew.component.css']
})
export class AbhaNewComponent implements OnInit {

  adharnum: any;
  phoneNum: any;
  otpAdharView: any;
  otpAdhar: any;
  otphone: any;
  response: any;
  otpAdharhide: boolean = false;
  otpphonehide: boolean = false;
  otpmobileView: any;
  Email: any;
  tableshow: boolean = false;
  valuecheack: boolean = false;
  phonenumhide: boolean = false;
  emailhide: boolean = true;
  adharincorrect: any = false;
  infocheck:boolean=true;

  constructor(private abha: AbhaService) { }
  ngOnInit(): void {
    console.log(this.valuecheack);

  }

  adharsubmit() {
    this.abha.adharNum=this.adharnum
    this.abha.post_adharAPI().subscribe((res) => {
      console.log(res)
      this.response = res;
    
      if (this.response.adhar == this.adharnum) {
        console.log(this.adharnum)
        this.otpAdharView = true;
        this.otpAdharhide = true;
        this.adharincorrect = false;
        this.infocheck=false;
        this.valuecheack=false;
        // alert("otp Sent");  
      }
      else {
        this.adharincorrect = true;
      
      }
    })
  };
  verifyAdhar() {
    this.abha.adharOTPNum=this.otpAdhar
    this.abha.post_adharOTPAPI().subscribe((res) => {
      this.response = res;
      if (this.response.adhar == this.adharnum) {
        if (this.otpAdhar == this.response.otp) {
          alert("You adhar is Verifield")

          this.otpAdharhide = false;
          this.phonenumhide = true;
         
        } else { alert("OTP Incorrect") }
      }
    })
  };
  PhoneSubmit() {
    this.abha.mobileNum=this.phoneNum
    this.abha.post_mobileAPI().subscribe((res) => {
      console.log(res)
      this.response = res
      this.response.phone == this.phoneNum

      if (this.response.phone == this.phoneNum) {

        this.otpphonehide = true;

        alert("OTP Send")
      }
      else {
        alert("Incorrect Mobile");
      }
    })
  };

  VerifyPhone() {
    this.abha.email=this.Email;
    this.abha.post_mbileOTPAPI().subscribe((res) => {
      this.response = res;
      if (this.response.phone == this.phoneNum) {
        if (this.otphone == this.response.otp) {
          alert("You adhar is Verifield")
          this.otpphonehide = false;
          this.emailhide = false;

        } else { alert("OTP Incorrect") }
      }
    })
  };

  EmailSubmit() {
    this.abha.post_email().subscribe((res) => {
      console.log(res)
    })
    this.abha.post_health_card().subscribe((res) => {
      this.response = res;
      this.tableshow = true;
    })
    
  }

  print(item:any){
    window.print();
  }


}

