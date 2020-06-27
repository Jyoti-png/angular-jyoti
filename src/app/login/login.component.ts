import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
users =[];
admin =[];
pushUser(data){
  this.users.push(data);
}

pushAdmin(admindata){
  this.admin.push(admindata);
}

onRemoveUser(item){
  this.users.splice(item, 1);
}

onRemoveAdmin(item){
  this.admin.splice(item, 1);
}
}