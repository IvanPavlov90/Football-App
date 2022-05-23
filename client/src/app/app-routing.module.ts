import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { LeaguesComponent } from './components/leagues/leagues.component';

const routes: Routes = [
  { path: '', component: LeaguesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'league/:leagueid', component: ClubsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
