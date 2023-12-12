import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree} from '@angular/router';
import { AuthService } from './auth.service';
import { AlertService } from './alert.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router, private alert : AlertService) {}

  canActivate(route : ActivatedRouteSnapshot): boolean {
    this.router.navigate(['/home-page']);
    return true;
    /*** ************** **/
    let role = route.data["role"]
    if (role != undefined && role.toLowerCase() === "author") {
      if (this.authService.checkLogged()) {
        return true;
      } else {
        this.router.navigate(['/home-page']);
        this.alert.showErrorAlert("Sign in to continue", "Close",5000);
      }
    }
    if (role == undefined) {
      if (this.authService.checkLogged()) {
        this.router.navigate(['/home-page']);
      } else {
        return true;
      }
    }
    return false;
  }

}
