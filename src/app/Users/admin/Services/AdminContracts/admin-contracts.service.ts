import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.baseurl+"/contract"

@Injectable({
  providedIn: 'root'
})
export class AdminContractsService {

  constructor(private http:HttpClient) { }

  getAllContracts(){
    return this.http.get<any[]>(`${url}/all`);
  }
  
  getAuditContracts(id:any){
    return this.http.get<any[]>(`${url}/audit/${id}`);
  }

  getAccountingContracts(id:any){
    return this.http.get<any[]>(`${url}/accounting/${id}`);
  }

  getConsultancyContracts(id:any){
    return this.http.get<any[]>(`${url}/consultancy/${id}`);
  }
}
