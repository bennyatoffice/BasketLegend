import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { SelectMembersComponent } from './select-members/select-members.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { WinnerComponent } from './winner/winner.component';


const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'select', component: SelectMembersComponent },
  { path: 'game', component: ScoreBoardComponent },
  { path: 'winner', component: WinnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
