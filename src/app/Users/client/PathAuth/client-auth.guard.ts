import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const clientId = localStorage.getItem('clientId');

    if (clientId) {
      // Admin ID is present, allow access to the desired route
      return true;
    } else {
      // Admin ID is not present, redirect to a different route
      this.router.navigate(['']); // Replace 'login' with your desired route
      return false;
    }
  
}}
