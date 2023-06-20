import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { audit } from './Audit';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.baseurl+"/audit"

@Injectable({
  providedIn: 'root'

})
export class AuditService {

  constructor(private http: HttpClient) { }

  getAudit(){
    return this.http.get<any[]>(`${URL}`);
  }
    
  getAuditById(id: number): Observable<audit>{
    return this.http.get<audit>(`${URL}/${id}`)
  }
  addAudit(data:any){
    return  this.http.post(`${URL}`, data);
  }

  updateAudit(id:number,audit:audit){
    return this.http.put(`${URL}/${id}`,audit)
  }

  deleteAudit(id:number){
    return this.http.delete(`${URL}/${id}`) 
  }

}
