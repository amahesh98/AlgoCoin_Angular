import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  index:number;
  task:any
  showTask:boolean
  constructor(private route:ActivatedRoute, private _httpService:HttpService) {
    this.task={}
    this.showTask=false
  }

  ngOnInit() {
    this.index=parseInt(this.route.snapshot.paramMap.get('index'))
    this.getTask()
  }
  getTask(){
    console.log("Index:", this.index)
    var history=this._httpService.getHistory()
    if(this.index>=history.length || this.index<0){
      this.showTask=false
      return
    }
    this.task=history[this.index]
    this.showTask=true;
  }

}
