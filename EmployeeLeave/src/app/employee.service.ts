import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  headers: HttpHeaders;
  url: string = 'https://localhost:44307/api/Employees';

  constructor( private http:HttpClient ) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
   }

  public get(){
    return this.http.get(this.url , {headers:this.headers})
  }

  public post(body){
    return this.http.post<any>(this.url , JSON.stringify( body) ,{headers:this.headers})
  }
}
