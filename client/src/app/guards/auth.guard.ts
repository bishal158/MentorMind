import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { user } from '../constants/constants';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router: Router = inject(Router);
  const toastr: ToastrService = inject(ToastrService);
  let userInfo: any = localStorage.getItem(user);
  let adminInfo: any = null;
  adminInfo = JSON.parse(userInfo);
  if (adminInfo.role === 'admin') {
    return true;
  } else {
    alert('Please select a role');
    router.navigate(['/login']);
    // .then((r) => {
    //   toastr.error('Your are not admin', 'Wrong Credentials!!', {
    //     timeOut: 3000,
    //     positionClass: 'toast-top-right',
    //     titleClass: 'toast-title',
    //   });
    // });
    return false;
  }
};
