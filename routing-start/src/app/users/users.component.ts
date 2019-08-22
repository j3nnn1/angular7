import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
  user: {id: number, name: string};

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  getUser(id: number) {
    const user = this.users.find(
      (s) => {
        return s.id === id;
      }
    );
    return user;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {
        this.user = this.getUser(params['id']);
      }
    );
    console.log('editado: ' + this.user );
  }
}
