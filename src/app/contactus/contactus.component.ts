import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../designutility.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private _msgService:DesignutilityService) { }
product="Test"
  ngOnInit() {

    this.product = this._msgService.product;
  }

  btnClick(){
    this._msgService.msgAlert();
  }

}