import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AbhaService {
  adharNum: any;
  adharOTPNum: any;
  mobileOTPNum: any;
  mobileNum: any;
  txnId: any;
  email: any;
  test:any;


  constructor(private http: HttpClient) { }

  genrate_otp_api = "https://abha.bhavyabiharhealth.in/api/health-address/v1/registration/aadhaar/generateOtp";
  verif_adharotp = "https://abha.bhavyabiharhealth.in/api/health-address/v1/registration/aadhaar/verifyOTP";
  genrate_mobile_otp = "https://abha.bhavyabiharhealth.in/api/health-address/v1/registration/aadhaar/generateMobileOTP";
  verify_mobile_otp = "https://abha.bhavyabiharhealth.in/api/health-address/v1/registration/aadhaar/verifyMobileOTP";
  get_health_card = "https://abha.bhavyabiharhealth.in/api/health-address/v1/account/getPngCard?x-token=eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiI1MC0yNzc0LTMzMzItNTg4NiIsImNsaWVudElkIjoiUGxVUzkxX01FRElYQ0VMXzAwMSIsInN5c3RlbSI6IkFCSEEtTiIsIm1vYmlsZSI6IjkwMjE1NDY1MzYiLCJleHAiOjE2NzA2ODQ5ODQsImhlYWx0aElkTnVtYmVyIjoiNTAtMjc3NC0zMzMyLTU4ODYiLCJpYXQiOjE2NzA2ODMxODR9.reES4EvfvMDrU2DyPcbHPcks_yzff6Vw6xZil17nPphgYnIPq8WJGhVFJCq5m2Q6vrJ58pEzAUGULSNv33U_xhdbHE9c0PfM5sijMhnbXreAkKtOOTlMijysGKQu6uYYNA7TI5ePnBMwG2p24pAAPCyahUzg0rDHFg0LAYpC1Gi9TENRTBf02XIug1YFlEH-bTa_j48Z-cu-2aslsqb6zNz9Owys2JH7RGYKNdeUfZzTwMrhUdjyTndzvhhmkWans4D0prs9EU3frK6U0GGEeovRaYkQzwFNGbVfKUPqzP09q_Jfe5BP5sivW-LtOUtth2Zv0ObBrdhrx9bEpxlRIbcLAgqv_c5TCUi-6fe85b9vjEU113s1czZ7KNDDftdUHwX4bBttSVTY_O-EGhqglERMBvJrrPkmqlHjUxN9o8pSmcw0aJ_ZDm-bsc-vOa3vTUrf0jG3-LtUVyhQJvBIo6LOUcuPTMX0DAnoipBOvnNa6c9lT8LTKm4tuoDwgp9s0FTcKme8R-58UpgpQcNVb2Ezk7EWmjwAASOa-AXlKFzBlo0ZiSVitFw-GCDecS-RLQ-FbTdwFsXZ1ymLVtshnK9Px9rWzZsM4mmy1JEppfdm-T9hiX_LBL4l5exj5EV8b3yjKO6fAWBU30xYPGNtaLPlFw8mWf1qAepfV9yrRxY&sHealthID=saneekadam13899%40gmail.com";
  createhealth_card = "https://abha.bhavyabiharhealth.in/api/health-address/v1/registration/aadhaar/createHealthIdWithPreVerified";
  phr_linked = "https://abha.bhavyabiharhealth.in/api/health-address/v2/account/phr-linked";
  getjson() {
    return this.http.get("assets/test.json")
  }

  post_adharAPI() {
    return this.http.post(this.genrate_otp_api, { "aadhar": this.adharNum });
  }
  
  get_adharOTPAPI() {
    return this.http.get(this.genrate_mobile_otp).subscribe((data)=>{
      this.test=data;
      this.txnId =this.txnId.txnId;
    })
  }

  post_adharOTPAPI() {
    return this.http.post(this.verif_adharotp, { "otp": this.adharOTPNum, "txnId": this.txnId });
  }
 
  post_mobileAPI() {
    return this.http.post(this.genrate_mobile_otp, { "mobile": this.mobileNum, "txnId": this.txnId });
  }
  post_mbileOTPAPI() {
    return this.http.post(this.verify_mobile_otp, { "otp": this.mobileOTPNum, "txnId": this.txnId });
  }
  post_email() {
    return this.http.post(this.createhealth_card, { "email": this.email, "txnId": this.txnId });
  }
  post_health_card() {
    return this.http.get(this.get_health_card);
  }

}
