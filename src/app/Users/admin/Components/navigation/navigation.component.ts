import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RegistrationService } from '../../Services/registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
 
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    adminName!: String;

  constructor(private breakpointObserver: BreakpointObserver, private registrationService: RegistrationService,
    private router:Router) {}

  ngOnInit(): void{
    this.getAdminName();
  }


  public getAdminName(){
    this.registrationService.getRegistrationById(localStorage.getItem("id")).subscribe(response =>{
      this.adminName = response.firstName;
      console.log(this.adminName);
     
    });
  }

  logOut(){
    localStorage.removeItem("id");
    this.router.navigate([''])
    
  }


}
