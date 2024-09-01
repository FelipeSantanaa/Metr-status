import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { metroResponse } from '../types/metro-response';
import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MetroService {
  constructor(private http: HttpClient) {}

  getMetroStatus() {
    return this.http.get<metroResponse>(env.apiUrl);
  }
}
