import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContasListagemComponent } from './contas-listagem/contas-listagem.component';
import { ContaService } from './conta.service';

@NgModule({
  declarations: [
    AppComponent,
    ContasListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ContaService],
  bootstrap: [AppComponent]
})
export class AppModule { }