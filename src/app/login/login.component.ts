import { Component } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../constants/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  logoUrl: string;
  bgUrl: string;

  constructor() {
    // Assegna i valori alle proprietà
    this.logoUrl = LOGO_URL;
    this.bgUrl = BG_IMG_URL;
  }
}
