import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-services-child',
  templateUrl: './services-child.component.html',
  styleUrls: ['./services-child.component.css']
})
export class ServicesChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() productSelected:boolean= false;
@Input() produtName:String;
  

@Output() addedProduct = new EventEmitter<any>();
 onAddProduct(){
  //  this.addedProduct = this.produtName;
  this.addedProduct.emit(this.produtName);
 }
}