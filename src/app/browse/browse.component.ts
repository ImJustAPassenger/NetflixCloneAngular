import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {

constructor(private loginService: LoginService, private router:Router)
{}

  ngOnInit()
{
  if (!this.loginService.isLoggedIn)
    //console.log("user not logged")
    this.router.navigateByUrl("/login");  
}
}
