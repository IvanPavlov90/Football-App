import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { AdminComponent } from './admin/admin.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { SafeURLPipe } from './pipes/safe-url.pipe';
import { LeagueItemComponent } from './league-item/league-item.component';
import { leagueReducer } from './store/leagues/leagues.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    AdminComponent,
    AdminFormComponent,
    SafeURLPipe,
    LeagueItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      leagues: leagueReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      autoPause: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
