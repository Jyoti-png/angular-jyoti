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


isValid:boolean = false;

onButtonClick(){
  this.isValid = true;
}

selectProduct:String;
onSelectChange(mine){
  console.log(mine.target.value);
  this.selectProduct= mine.target.value;
}
products=[
{name:'Laptop', id:'pro1'},
{name:'Mobile', id:'pro2'},
{name:'TV', id:'pro3'},
{name:'WM', id:'pro4'}

]
users=[];

onCreateUsers(unames){
this.users.push(
  {
    name:unames.value
  }
)

}


onRemoveUser(unames){
  this.users.splice(this.users.length-1)
}

onRemoveUsers(item){
  this.users.splice(item, 1);
}
}