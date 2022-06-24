import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../../services/local-storage.service';
import { SignInRequest, SignInResponse } from '../../models/auth.httpModels';
import { Observable,map } from 'rxjs';



@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  signin(reqBody: SignInRequest): Observable<SignInResponse> {
    return this.http.post<SignInResponse>('/users/login', {data:reqBody})

    
  }
}
