import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  coins:number
  value:number
  history:any
  index:number
  constructor(private _http:HttpClient) { 
    this.coins=0
    this.value=1
    this.history=[]
    this.index=0
  }
  mine(){
    this.coins+=1
    this.history.push({action:'Mined', amount:1, value:this.value, index:`${this.index}`})
    this.index++
    this.value+=1
  }
  getCoins(){
    return this.coins
  }
  getValue(){
    return this.value
  }
  buy(quantity:number){
    this.coins+=quantity
    this.history.push({action:'Bought', amount:quantity, value:this.value, index:`${this.index}`})
    this.index++
    this.value+=quantity
  }
  sell(quantity:number){
    this.coins-=quantity
    this.history.push({action:'Sold', amount:quantity, value:this.value, index:`${this.index}`})
    this.index++
    this.value-=quantity
    if(this.value<1){
      this.value=1
    }
  }
  getHistory(){
    return this.history
  }
  getTask(index){
    if(index>=history.length || index<0){
      return false
    }
    return this.history[index]
  }
}
