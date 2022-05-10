import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { PlayerformComponent } from './player-form/player-form.component';
import { DictionnaireComponent } from './dictionnaire/dictionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    PlayerformComponent,
    DictionnaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
