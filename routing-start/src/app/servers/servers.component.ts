import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  server: {id: number, name: string, status: string};
  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.servers = this.serversService.getServers();

    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(params['id']);
      }
    );
  }

  onReload() {
    this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
