import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-select-members',
  templateUrl: './select-members.component.html',
  styleUrls: ['./select-members.component.css']
})
export class SelectMembersComponent implements OnInit {

  members = [];
  playername: string;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
  }

  addPlayer() {
    this.members.push(this.playername);
    console.log(this.members);
    this.playername = '';
  }

  removePlayer(index: number) {
    this.members.splice(index, 1);
  }

  done() {
    if(this.members.length>1){
      this.data.changeMessage(this.members);
      this.router.navigate(['game']);
    }else{
      alert('Minimum 2 Players Required')
    }
  }

}
