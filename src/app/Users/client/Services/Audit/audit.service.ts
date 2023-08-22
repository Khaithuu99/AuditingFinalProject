import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { audit } from './audit';
import { Observable } from 'rxjs';
const url = environment.baseurl+"/audit"
const newUrl = environment.baseurl

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private http:HttpClient) { }

  getAllAudits(id:any){
    return this.http.get<any[]>(`${url}/client/${id}`);
  }

  
  viewContract(id:any){
    return this.http.get<any>(`${newUrl}/contract/client/either/${id}`);

  }

  getAuditById(auditId: number): Observable<audit>{
    return this.http.get<audit>(`${url}/${auditId}`)
  }

  updateAudit(auditId:number,audit:audit){
    return this.http.put(`${url}/${auditId}`,audit)
  }

  updateContractStatus(id:number){
    return this.http.put(`${url}/contractStatus/${id}`,null);
  }

  cancelContractStatus(id:number){
    return this.http.put(`${url}/contractCancel/${id}`,null);
  }
  
  deleteAudit(auditId:number){
    return this.http.delete(`${URL}/${auditId}`) 
  }
  
}
