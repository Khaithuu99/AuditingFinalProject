import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../Services/registration.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  registration: any
  id!: number

  regLogin: FormGroup = new FormGroup({
    id: new FormControl(0),
    password: new FormControl("",[Validators.required, Validators.minLength(8)]),
    email: new FormControl("",[Validators.required, Validators.email])
  });

  constructor(private router: Router, private registrationService: RegistrationService){}
  ngOnInit(): void{}

  LoggingIn(){
    this.registrationService.getRegLogin(this.regLogin.value).subscribe(response => {
      console.log(response);
      this.registration= response
      localStorage.setItem("id",JSON.stringify(this.registration.adminId));
      this.router.navigate(['Admin/navigation']);
      alert('Login successfullyy...!!!')
    },
      error =>{
        alert('Login Failledd...')
      }
    )
  };

}
