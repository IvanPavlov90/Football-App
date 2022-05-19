import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { SafeURLPipe } from './pipes/safe-url.pipe';
import { LeagueItemComponent } from './components/league-item/league-item.component';
import { leagueReducer } from './store/leagues/leagues.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { LeagueEffects } from './store/leagues/league.effects';
import { NotificatorComponent } from './components/notificator/notificator.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    AdminComponent,
    AdminFormComponent,
    SafeURLPipe,
    LeagueItemComponent,
    NotificatorComponent,
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
    }),
    EffectsModule.forRoot([LeagueEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
