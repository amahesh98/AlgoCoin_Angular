import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { parse } from 'url';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  coins=0
  value=1
  quantity;
  message=''
  constructor(private _httpService:HttpService) {
    this.quantity=''
  }

  ngOnInit() {
    this.getCoins()
    this.getValue()
  }
  sell(){
    if(this.quantity==''){
      return
    }
    if(isNaN(this.quantity)){
      this.message='Thats not a number!'
      this.quantity=''
      return
    }
    if(parseInt(this.quantity)>this.coins){
      this.message='You cant sell more coins than you have!'
      this.quantity=''
      return
    }
    var q=parseInt(this.quantity)
    if(q<=0){
      this.message='You cant sell nothing!'
      this.quantity=''
      return
    }
    this._httpService.sell(q)
    this.getCoins()
    this.getValue()
    this.message=`Successfully sold ${this.quantity} AlgoCoins!`
    this.quantity=''
  }
  
  getCoins(){
    this.coins=this._httpService.getCoins()
  }
  getValue(){
    this.value=this._httpService.getValue()
  }

}
