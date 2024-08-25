import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  
  @Output() otpFormValue = new EventEmitter<any>();
  
  otpForm: FormGroup;
  resendButtonVisible: boolean = false;
  countdown: number = 60; // Countdown time in seconds

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the OTP form with 6 controls, each requiring a single digit
    this.otpForm = this.fb.group({
      otp1: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      otp2: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      otp3: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      otp4: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      otp5: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      otp6: ['', [Validators.required, Validators.pattern('^[0-9]$')]]
    });
  }

  ngOnInit(): void {
    this.startCountdown();
    this.otpForm.valueChanges.subscribe((res:any)=> {
      this.otpFormValue.emit(this.otpForm.invalid)
    })
  }

  startCountdown() {
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(interval);
        this.resendButtonVisible = true;
      }
    }, 1000);
  }

  // Adjusting the event type to 'Event' to avoid type errors
  onOtpInput(event: Event, nextInput: HTMLInputElement | null, prevInput: HTMLInputElement | null) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1 && nextInput) {
      nextInput.focus(); // Focus on the next input
    }
  }

  // Use 'keydown' event to detect 'Backspace'
  onOtpKeydown(event: KeyboardEvent, prevInput: HTMLInputElement | null) {
    if (event.key === 'Backspace' && prevInput) {
      prevInput.focus(); // Focus on the previous input if backspace is pressed
    }
  }

  onSubmit() {
    if (this.otpForm.valid) {
      const otp = `${this.otpForm.value.otp1}${this.otpForm.value.otp2}${this.otpForm.value.otp3}${this.otpForm.value.otp4}${this.otpForm.value.otp5}${this.otpForm.value.otp6}`;
          
    }
  }

  resendOtp() {
    console.log('Resend OTP clicked');
   
    this.resendButtonVisible = false;
    this.countdown = 60; // Reset countdown
    this.startCountdown(); // Restart countdown for the next resend
  }
}
