import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toolTipMessage = 'Login or create an account to contribute to the community!';
  constructor() { }

  ngOnInit(): void {
  }

}
