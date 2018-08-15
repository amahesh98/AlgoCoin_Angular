import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  value:number
  quantity;
  coins:number
  message:string
  constructor(private _httpService:HttpService) {
    this.value=1
    this.quantity=''
    this.coins=0
    this.message=''
   }

  ngOnInit() {
    this.getCoins()
    this.getValue()
  }
  getValue(){
    this.value=this._httpService.getValue()
  }
  buy(){
    if(this.quantity==''){
      return
    }
    if(isNaN(this.quantity)){
      this.quantity=''
      this.message='Your input is not a number'
      return
    }
    var q=parseInt(this.quantity)
    if(q<=0){
      this.message='You cant buy nothing!'
      this.quantity=''
      return
    }
    this._httpService.buy(q)
    this.getCoins()
    this.getValue()
    this.message=`Successfully bought ${this.quantity} AlgoCoins!`
    this.quantity=''
   
  }
  getCoins(){
    this.coins=this._httpService.getCoins()
  }

}
