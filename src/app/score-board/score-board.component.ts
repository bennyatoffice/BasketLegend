import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {

  members = [
    { name: 'benny', score: 0 }, { name: 'anish', score: 0 }, { name: 'prashob', score: 0 },
  ];
remembers=[];
  round: number = 1;

  _selectedplayer: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.data.currentmessage.subscribe((Message) => this.remembers = Message);
    this.members = this.remembers.map(str=>({name:str,score:0}));

  }

  selectedplayer(index: number) {
    this._selectedplayer = index;
    console.log(this._selectedplayer);
  }

  plus1() {
    this.members[this._selectedplayer].score++;
  }

  plus2() {
    this.members[this._selectedplayer].score += 2;
  }

  Won(){
    this.data.changeWinner(this.members[this._selectedplayer].name);
    this.router.navigate(['winner']);
  }
  nextround() {
    if (this.round < 20) {
      this.round++;
    }else{
      let Topscore =  this.members.reduce((max, b) => Math.max(max, b.score), this.members[0].score);
      let winner = this.members.filter(o=> o.score == Topscore);
      console.log(winner[0].name);
      this.data.changeWinner(winner[0].name);
      this.router.navigate(['winner']);
    }

  }
}
