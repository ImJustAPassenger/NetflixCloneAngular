import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../Services/login.service";
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private service: LoginService, private router:Router){

    }
    canActivate(): any{
        if(this.service.isLoggedIn)
        {
            this.router.navigateByUrl("/browse")
            return true

        }
        this.router.navigateByUrl("/login")
        return false
    }
}