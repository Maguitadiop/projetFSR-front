import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent {

  idContact:number;

  constructor(private router: Router,private contactService:ContactService) { 
    this.idContact = 1;
  }

  deleteContact(): void{
    this.contactService.deleteContact(this.idContact).subscribe(result => this.goToContacts());
  }

  goToContacts(){
    this.router.navigate(['/']);
  }

}
