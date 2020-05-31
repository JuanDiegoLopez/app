import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Progress } from '../models/progress.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  progress: Progress;

  constructor(private http: HttpClient) {}

  getProgress(userId: string): Observable<Progress> {
    return this.http.get<Progress>(`${environment.API_URL}/progress/${userId}`);
  }
}