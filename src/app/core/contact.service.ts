import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactRequestPayload {
  name: string;
  email: string;
  hospitalName: string;
  message: string;
  recaptchaToken?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

/** Talks to hms-api's public /api/public/contact endpoint - a cross-origin call, see environment.ts for why. */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly endpoint = `${environment.apiBaseUrl}/api/public/contact`;

  constructor(private readonly http: HttpClient) {}

  submitDemoRequest(payload: ContactRequestPayload): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.endpoint, payload);
  }
}
