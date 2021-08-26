import {Component, OnInit} from '@angular/core';
import {Contact} from "./contact.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor() {
    this.contacts = [
      new Contact('dima', 'home', 'https://randomuser.me/api/portraits/lego/0.jpg'),
      new Contact('ivan', 'cafe', 'https://randomuser.me/api/portraits/lego/1.jpg'),
      new Contact('kolya', 'office', 'https://randomuser.me/api/portraits/lego/2.jpg'),
      new Contact('vlad', 'gas station', 'https://randomuser.me/api/portraits/lego/3.jpg')
    ]
  }

  ngOnInit(): void {
  }

}
