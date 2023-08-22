import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../../Services/Admin/Registration';
import { RegistrationService } from '../../Services/Admin/registration.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  registration: Registration = new Registration();
 
  constructor( private registrationService: RegistrationService){}

  ngOnInit(): void{
    this.fetchRegistration();
  }


  public fetchRegistration(){
    this.registrationService.getRegistrationById(localStorage.getItem("id")).subscribe(response =>{
      this.registration = response
      console.log(response)
     
    })
  }

  // updateRegistrationt(id: number){
  //   this.router.navigate(['/profile',{id}])
  // }

  // public deleteRegistration(id:number){
  //   this.registrationService.deleteRegistration(id).subscribe(
  //     (data)=>{
  //       alert('Deleted...!!!')
  //       this.getRegistration();
  //     },
  //     (Error)=>{
  //       alert('failled...!!!')
  //     }
  //   )
  // }


}
