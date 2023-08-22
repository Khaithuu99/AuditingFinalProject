import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { accounting } from './accounting';

const URL = environment.baseurl+"/accounting"
const newUrl = environment.baseurl

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

  getAllAccounts(id:any){
    return this.http.get<any[]>(`${URL}/client/${id}`);

  }

  viewContract(id:any){
    return this.http.get<any>(`${newUrl}/contract/client/either/${id}`);

  }

  setEngagement(id:any, data:any){
    return this.http.put(`${URL}/engagementDate/${id}`, data);
  }

  countAccount(){
    return this.http.get<any>(`${URL}/count`);
  }

}
