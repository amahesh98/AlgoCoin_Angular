import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  response:String
  message:String
  coins:number
  constructor(private _httpService: HttpService) {
    this.response=''
    this.message=''
    this.coins=0
   }

  ngOnInit() {
    this.getCoins()
  }
  mineCoin(){
    if(this.response=="Michael Choi"){
      console.log("Successfully mined")
      this.message="Successfully mined"
      this.response=''
      this._httpService.mine()
      this.getCoins()
    }
    else{
      console.log("Mining unsuccessful")
      this.message="Mining unsuccessful"
    }
  }
  getCoins(){
    this.coins=this._httpService.getCoins()
  }

}
