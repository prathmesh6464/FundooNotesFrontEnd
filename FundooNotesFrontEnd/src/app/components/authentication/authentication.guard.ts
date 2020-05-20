import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [],
  bootstrap: []
})

export class AuthenticationGuard implements CanActivate {

  constructor(private authService: UserService, private router: Router) { }
  canActivate(): boolean {
    if (this.authService.logIN()) {
      return true;
    } else {
      this.router.navigate(['user/login']);
      return false;
    }
  }

}
