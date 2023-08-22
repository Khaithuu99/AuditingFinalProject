import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { audit } from './Audit';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.baseurl+"/audit"
const newUrl = environment.baseurl

@Injectable({
  providedIn: 'root'

})
export class AuditService {

  constructor(private http: HttpClient) { }

  getAudit(){
    return this.http.get<any[]>(`${URL}`);
  }
  
  getAllAudits(id:any){
    return this.http.get<any[]>(`${URL}/client/${id}`);
  }
    
  getAuditById(auditId: number): Observable<audit>{
    return this.http.get<audit>(`${URL}/${auditId}`)
  }
  updateAudit(auditId:number,audit:audit){
    return this.http.put(`${URL}/${auditId}`,audit)
  }

  addAudit(data:any){
    return  this.http.post(`${URL}`, data);
  }

  
  deleteAudit(auditId:number){
    return this.http.delete(`${URL}/${auditId}`) 
  }

  approveRequest(id:number){
    return this.http.put(`${URL}/approvalStatus/${id}`,null);
  }

  createContract(data:any){
    return this.http.post(`${URL}/contract`, data);
  }

  viewContract(id:any){
    return this.http.get<any>(`${newUrl}/contract/client/either/${id}`);

  }

  setEngagement(id:any, data:any){
    return this.http.put(`${URL}/engagementDate/${id}`, data);
  }

  countAudit(){
    return this.http.get<any>(`${URL}/count`);
  }
 

}
