import { Component, OnInit } from '@angular/core';
import { CommonState } from '../shared/common-state';
import { ContactsService } from '../shared/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Array<any>;

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    if (!CommonState.contacts) {
      this.contactService.getContacts().then(data => {
        CommonState.contacts = data.results;
        this.contacts =  CommonState.contacts;
      });
    } else {
      this.contacts =  CommonState.contacts;
    }
  }

  addFavorito(contact) {
    if (!CommonState.favorites.find(contactIterator => contactIterator.id.value === contact.id.value)) {
      CommonState.favorites.push(contact);
    }
  }
}
