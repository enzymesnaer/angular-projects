
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
  serverName = 'TestServerInitially';
  serverCreated = false; 
  servers = ['testserver', 'testserver2'];

  onCreateServer() {
    this.serverCreated = true; 
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    
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
