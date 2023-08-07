import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { consaltant } from './consaltant';



const URL = environment.baseurl+"/consultancy"


@Injectable({
  providedIn: 'root'
})
export class ConsaltantService {

  constructor(private http: HttpClient) { }

  getConsultant(){
    return this.http.get<any[]>(`${URL}`);
  }
    
  getConsultantById(consultancyId: number): Observable<consaltant>{
    return this.http.get<consaltant>(`${URL}/${consultancyId}`)
  }
  addConsultant(data:any){
    return  this.http.post(`${URL}`, data);
  }

  updateConsultant(consultancyId:number,consaltant: consaltant){
    return this.http.put(`${URL}/${consultancyId}`,consaltant)
  }

  deleteConsultant(consultancyId:number){
    return this.http.delete(`${URL}/${consultancyId}`) 
  }

  approveRequest(id:number){
    return this.http.put(`${URL}/approvalStatus/${id}`,null);
  }

  createContract(data:any){
    return this.http.post(`${URL}/contract`, data);
  }


}
