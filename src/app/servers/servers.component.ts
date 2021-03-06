import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  name = 'Hardik Dhiman'
  allowNewServer = false;
  serverCreationStatus = "no server found";
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  onServerCreation() {
    this.serverCreationStatus = "Server created!";
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  ngOnInit(): void {
  }

}
