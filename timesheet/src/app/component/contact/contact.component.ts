import { Component } from '@angular/core';

interface Contact {
  name: string;
  email: string;
  sujet:string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact: Contact = {
    name: '',
    email: '',
    sujet: '',
    message: ''
   
  };

  onSubmit(contact: Contact) {
    // Handle form submission here
    console.log(contact);
  }
}