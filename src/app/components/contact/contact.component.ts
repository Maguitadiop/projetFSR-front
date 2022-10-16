import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../models/contact.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact: Contact;
  
  constructor(private contactService:ContactService) { 
    this.contact = new Contact();
  }
}
