import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { accounting } from './accounting';
import { Observable } from 'rxjs';
const url = environment.baseurl+"/accounting"
const newUrl = environment.baseurl
@Injectable({
  providedIn: 'root'
})
export class AccountingService {

  constructor(private http:HttpClient) { }

  getAllAccounts(id:any){
    return this.http.get<any[]>(`${url}/client/${id}`);

  }

  viewContract(id:any){
    return this.http.get<any>(`${newUrl}/contract/client/either/${id}`);

  }

   
  getAccountById(accountId: number): Observable<accounting>{
    return this.http.get<accounting>(`${url}/${accountId}`)
  }
  
  updateAccount(accountId:number,accounting: accounting){
    return this.http.put(`${url}/${accountId}`,accounting)
  }

  deleteAccount(accountId:number){
    return this.http.delete(`${url}/${accountId}`) 
  }
}
