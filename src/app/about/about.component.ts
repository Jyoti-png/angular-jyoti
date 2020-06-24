import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
myname: String ="Jyoti";
uname: String ="Jyoti";
myMethod(){
  return "My name is:" + this.myname;
}
appStatus: boolean = true;


 msg:String="";
// onAddCart(){
//   this.msg="Product Added";
// }


onAddCart1(event){
  this.msg = event.target.value + "Added in cart";
}
}