import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LOGO_URL, BG_IMG_URL } from '../../constants/config';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logoUrl: string;

  constructor() {
    // Assegna i valori alle proprietà
    this.logoUrl = LOGO_URL;
  }
}
