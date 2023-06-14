import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/evironments/environment';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  async signin(data: { email: string; password: string }) {
    return await lastValueFrom(
      this.http.post(`${this.baseUrl}/auth/signin`, data)
    );
  }
}
