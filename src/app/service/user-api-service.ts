import { Injectable } from '@angular/core';
import { UserService } from './user-service';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../auth/token-service';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private tokenService: TokenService, private userService: UserService, private http: HttpClient) { }


  
}
