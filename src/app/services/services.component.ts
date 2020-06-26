import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
prodSelected:boolean= false;
 productName:String;
 addedProduct:any;
 onProductSelected(product){
   this.prodSelected = true;
this.productName = product;
 }
onSelected(prodata){
  this.addedProduct = prodata;
}
 

 
}