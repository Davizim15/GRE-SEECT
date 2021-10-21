import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndentificacaoComponent } from './indentificacao/indentificacao.component';
import { ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndentificacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
