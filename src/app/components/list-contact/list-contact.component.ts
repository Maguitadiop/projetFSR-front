import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";  
import { ContactService } from 'src/app/services/contact.service';
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Contact } from 'src/app/models/contact.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  public contacts: Contact[] = [];

  constructor(private contactService:ContactService) { }

  ngOnInit(){
    this.getContacts();
  }


  public getContacts():void{
    this.contactService.getContactList().subscribe(
      (Response:Contact[])=>{
        this.contacts = Response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

}
