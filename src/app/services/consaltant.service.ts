import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { consaltant } from './consaltant';
import { Observable } from 'rxjs';


const URL = environment.baseurl+"/consultant"


@Injectable({
  providedIn: 'root'
})
export class ConsaltantService {

  constructor(private http: HttpClient) { }

  getConsultant(){
    return this.http.get<any[]>(`${URL}`);
  }
    
  getConsultantById(id: number): Observable<consaltant>{
    return this.http.get<consaltant>(`${URL}/${id}`)
  }
  addConsultant(data:any){
    return  this.http.post(`${URL}`, data);
  }

  updateConsultant(id:number,consaltant: consaltant){
    return this.http.put(`${URL}/${id}`,consaltant)
  }

  deleteConsultant(id:number){
    return this.http.delete(`${URL}/${id}`) 
  }


}
