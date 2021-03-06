import { Injectable } from '@angular/core';
import {CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(router, state: RouterStateSnapshot): any {
      // @ts-ignore
    return this.auth.user$.map(user => {
        if (user) {
          return true;
        } else {
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
        }
    });
  }
}

