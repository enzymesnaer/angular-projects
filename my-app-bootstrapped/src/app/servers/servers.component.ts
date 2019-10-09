
import { Component, OnInit } from '@angular/core';
@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus = 'No server was created!';

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);

   }
  ngOnInit() {
  }

}
