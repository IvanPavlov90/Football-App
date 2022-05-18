import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { AdminComponent } from './admin/admin.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { SafeURLPipe } from './pipes/safe-url.pipe';
import { LeagueItemComponent } from './league-item/league-item.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
