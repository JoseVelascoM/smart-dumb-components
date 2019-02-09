import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  getContacts(): Promise<any> {
      return this.http.get('https://randomuser.me/api/?nat=es&results=20').toPromise();
  }
}
