import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { consaltant } from './consultancy';
import { Observable } from 'rxjs';
const url = environment.baseurl+"/consultancy"
const newUrl = environment.baseurl

@Injectable({
  providedIn: 'root'
})
export class ConsultancyService {

  constructor(private http:HttpClient) { }

  getAllConsultancy(id:any){
    return this.http.get<any[]>(`${url}/client/${id}`);
    
  }

  getConsultantById(consultancyId: number): Observable<consaltant>{
    return this.http.get<consaltant>(`${url}/${consultancyId}`)
  }
  
  viewContract(id:any){
    return this.http.get<any>(`${newUrl}/contract/client/either/${id}`);

  }

  updateConsultant(consultancyId:number,consaltant: consaltant){
    return this.http.put(`${url}/${consultancyId}`,consaltant)
  }

  updateContractStatus(id:number){
    return this.http.put(`${url}/contractStatus/${id}`,null);
  }

}
