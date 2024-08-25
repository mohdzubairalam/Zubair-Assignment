import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
isSubmited:boolean=false;
isOtpFormInvalid:boolean=true;
  phoneRegex = /^[0-9]{10}$/;

  emailForm: FormGroup;
 

  constructor(private fb: FormBuilder, private router: Router) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]]
    });
  }

  get email() {
    return this.emailForm.get('email');
  }

  onSubmit() {
    if (this.emailForm.valid) {    
      this.isSubmited=true;
    }
  } 
  otpFormValueChanged(event:boolean){
  this.isOtpFormInvalid=event
    
  }
  otpsubmit(){
    this.router.navigate(["./home"]);
  }

}