import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_END_POINTS } from '../constants/api-end-points-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  postLogin(data:any):Observable<any>{
    return this.http.post(API_END_POINTS.user.postLogin,data)
  }
}
