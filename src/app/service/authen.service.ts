import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
const API_URL = `${environment.API_URL}`;
@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http:HttpClient) { }
  public login(body: any):Observable<any>{
    return this.http.post<any>(API_URL+'/api/auth/signin',body)
  }
}
