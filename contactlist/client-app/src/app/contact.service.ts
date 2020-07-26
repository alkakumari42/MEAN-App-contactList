import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'RxJs/operators'


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }

  //retriving contacts
  getContacts(){
    return this.http.get('http://localhost:3000/api/contacts')
           .pipe(map( res  => res.json()));
  }

  //add new contact
  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, {headers:headers});
  }

  //delete contact
  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contact/'+id)
    .pipe(map(res => res.json()));
  }
}


  