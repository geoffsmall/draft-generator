import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { DraftsComponent } from './drafts/drafts.component';
import { DraftTypesComponent } from './draft-types/draft-types.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app.routing';
import { ManagersComponent } from './managers/managers.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    DraftsComponent,
    DraftTypesComponent,
    WelcomeComponent,
    ManagersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
