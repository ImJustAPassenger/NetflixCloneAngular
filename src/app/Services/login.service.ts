import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class LoginService{
    constructor(){
    }
    login(email:string, passord:string ){
        //
        localStorage.setItem("token",Math.random()+"")
    }
    get isLoggedIn()
    {
      if(localStorage.getItem("token"))
      {
        return true
      }
      return false;
    }
}