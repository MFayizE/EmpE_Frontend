import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage['EmpE_accessToken'] && localStorage['EmpE_role']) {
      if(localStorage['EmpE_role'] == 'HR'){
        this.router.navigateByUrl('/admin/dash')
      }
      else{
        this.router.navigateByUrl('/user/dash')
      }
      return false;
    }
    else {
      return true;

    }
  }

}
