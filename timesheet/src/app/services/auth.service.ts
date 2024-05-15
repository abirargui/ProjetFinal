import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; // Assurez-vous que l'URL correspond à celle de votre backend
 

  constructor(private http: HttpClient) { }

  register(utilisateurs: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/inscription`, utilisateurs);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/connexion`, credentials);
  }
  forgotPassword(email : string) {
    
}
  
}
