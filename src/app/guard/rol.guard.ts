import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';


export const rolGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.getProfile()?.rolId != 1){
    router.navigate(['/dashboard']);
    return false;
  }
    return true;
};
