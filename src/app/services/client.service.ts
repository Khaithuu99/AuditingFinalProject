import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { client } from './client';
import { Observable } from 'rxjs';


const URL = environment.baseurl+"/client"
const myURL = URL+ "/login"
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClient(){
    return this.http.get<any[]>(`${URL}`);
  }

  getClientById(clientId:any): Observable<client>{
    return this.http.get<client>(`${URL}/${clientId}`)
  }

  getClientLogin(data:any){
    return this.http.post(`${myURL}`,data);
  }

  addClient(data:any){
    return  this.http.post(`${URL}`, data);
  }
  
  deleteClient(clientId:number){
    return this.http.delete(`${URL}/${clientId}`) 
  }


}
