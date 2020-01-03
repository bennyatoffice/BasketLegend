import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  winner:string ='Benny'

  constructor(private data:DataService, private router:Router) { }

  ngOnInit() {
    this.data.currentwinner.subscribe((winner)=>{
      this.winner = winner;
    })
  }

  restart(){
    this.router.navigate(['']);
  }

}
