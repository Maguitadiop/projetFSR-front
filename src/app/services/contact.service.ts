import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiServerUrl = 'http://localhost:8080/Springmvcangular';
  constructor(private http: HttpClient) {}

  public saveContact(contact : Contact) : Observable<Contact>{
    return this.http.post<Contact>(`${this.apiServerUrl}/add/`,contact);
  }

  public updateContact(contact :Contact): Observable<Contact>{
    return this.http.put<Contact>(`${this.apiServerUrl}/update/`,contact);
  }

  public getContactList(): Observable<any> {  
    return this.http.get(`${this.apiServerUrl}`+'/all');  
  }  

  public deleteContact(contactId:number): Observable<void> {
    return this.http.delete<any>(`${this.apiServerUrl}/delete/${contactId}`);
  }
}