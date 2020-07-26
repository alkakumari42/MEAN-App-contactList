import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: contact[];
  contact: contact;
  first_name:string;
  last_name:string;
  phone:string;
  constructor(private contactService: ContactService) {
   }

   addContact(){
     const newContact = {
       first_name: this.first_name,
       last_name: this.last_name,
       phone: this.phone
     }
     this.contactService.addContact(newContact)
     .subscribe(()=> {
       this.contacts.push(newContact); 
     })
   }

   deleteContact(id){
     var contacts = this.contacts;
      this.contactService.deleteContact(id)
      .subscribe(data =>{
        if(data.n==1){
          for(var i = 0; i<contacts.length; i++){
            if(contacts[i]._id == id){
              contacts.splice(i,1);
            }
          }
        }
      });
   }

  ngOnInit(){
    this.contactService.getContacts()
    .subscribe( contacts =>
     this.contacts = contacts);
  }

}
