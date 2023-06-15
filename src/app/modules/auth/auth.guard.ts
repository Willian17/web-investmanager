import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (!this.userService.isLogged()) {
      this.router.navigate(['signin'], {
        queryParams: {
          fromUrl: state.url,
        },
      });
      return false;
    }
    return true;
  }
}
