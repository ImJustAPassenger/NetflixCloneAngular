import { Component, inject, OnInit } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../constants/config';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{
  bgUrl: string;
  email!: string | null;
  password!: string | null;
  
  constructor (private router: Router, private loginService: LoginService,private toastrService: ToastrService) {
    // Assegna i valori alle proprietà

    this.bgUrl = BG_IMG_URL;
    this.email = null;
    this.password = null;
    
  }
ngOnInit()
{
  if (this.loginService.isLoggedIn)
   //console.log("user logged")
     this.router.navigateByUrl("/browse");  
}

  onSubmit() {
    if (!this.email || !this.password) {
      this.toastrService.error('provide email or passord');
      return;
    }
    console.log(this.email, this.password)
    this.loginService.login(this.email,this.password)
    this.email=this.password=null;
    this.toastrService.success("welcome back");
    this.router.navigateByUrl("/browse");
  }

}
