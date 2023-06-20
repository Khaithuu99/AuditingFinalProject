import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Registration } from './Registration';
import { Observable } from 'rxjs';


const URL = environment.baseurl+"/registration"
const myURL = URL+ "/login"
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getRegistration(){
    return this.http.get<any[]>(`${URL}`);
  }

  getRegistrationById(id:any): Observable<Registration>{
    return this.http.get<Registration>(`${URL}/${id}`)
  }

  getRegLogin(data:any){
    return this.http.post(`${myURL}`,data);
  }

  addRegistration(data:any){
    return  this.http.post(`${URL}`, data);
  }

  deleteRegistration(id:number){
    return this.http.delete(`${URL}/${id}`) 
  }

}
