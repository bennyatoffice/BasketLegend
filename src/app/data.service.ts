import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messagesource =  new BehaviorSubject(null)
  private winner = new BehaviorSubject(null);
  currentmessage = this.messagesource.asObservable();
  currentwinner = this.winner.asObservable();

  constructor() { }

  changeMessage(message:any[]){
    this.messagesource.next(message);
  }
  changeWinner(winner:string){
    this.winner.next(winner);
  }
}
