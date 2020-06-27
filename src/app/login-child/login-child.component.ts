import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.css']
})
export class LoginChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() placeholderText;

@Output() inputEvent = new EventEmitter;
count:number=0;
onCreate(inputvalue){
if(inputvalue.value.length>0){
  this.count = this.count + 1;
  //alert(inputvalue.value);
  this.inputEvent.emit(inputvalue.value)
}
}
}