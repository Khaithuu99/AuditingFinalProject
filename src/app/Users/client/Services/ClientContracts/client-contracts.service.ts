import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.baseurl+"/contract"
@Injectable({
  providedIn: 'root'
})
export class ClientContractsService {

  constructor(private http:HttpClient) { }

  getAllContracts(id:any){
    return this.http.get<any[]>(`${url}/client/${id}`);
  }
}
