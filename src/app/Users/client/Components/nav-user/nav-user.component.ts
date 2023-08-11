import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ClientService } from '../../Services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    firmName!: String;

  constructor(private breakpointObserver: BreakpointObserver, private clientService: ClientService,
    private router:Router ) {}

  ngOnInit(): void{
    this.getFirstName();
  }   

  public getFirstName(){
    this.clientService.getClientById(localStorage.getItem("clientId")).subscribe(response =>{
      this.firmName = response.firmName;
      console.log(this.firmName );
     
    });
  }

  logOut(){
    this.router.navigate(['Client'])
    localStorage.removeItem("clientId");
    
  }


}
