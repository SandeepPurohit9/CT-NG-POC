import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [
    {name : 'john', age: 25},
    {name : 'mary', age: 25},
    {name : 'july', age: 40},
  ]

  show: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
