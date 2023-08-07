import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { accounting } from '../../client/Services/Accounting/accounting';
import { Observable } from 'rxjs';

const URL = environment.baseurl+"/accounting"

@Injectable({
  providedIn: 'root'
})
export class AccountingService {

  constructor(private http: HttpClient) { }

  getAccount(){
    return this.http.get<any[]>(`${URL}`);
  }
    
  getAccountById(accountId: number): Observable<accounting>{
    return this.http.get<accounting>(`${URL}/${accountId}`)
  }
  addAccount(data:any){
    return  this.http.post(`${URL}`, data);
  }


  deleteAccount(accountId:number){
    return this.http.delete(`${URL}/${accountId}`) 
  }

  approveRequest(id:number){
    return this.http.put(`${URL}/approvalStatus/${id}`,null);
  }

  createContract(data:any){
    return this.http.post(`${URL}/contract`, data);
  }

}
