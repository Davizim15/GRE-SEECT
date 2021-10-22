import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IdentificacaoComponent } from './identificacao/identificacao.component';
import { ROUTING } from './app.routing';
import { EnderecoComponent } from './endereco/endereco.component';
import { SenhaComponent } from './senha/senha.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IdentificacaoComponent,
    EnderecoComponent,
    SenhaComponent,
    AlterarSenhaComponent
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
