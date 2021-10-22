import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { EnderecoComponent } from './endereco/endereco.component';


import { IdentificacaoComponent } from './identificacao/identificacao.component';
import { LoginComponent } from './login/login.component';
import { SenhaComponent } from './senha/senha.component';

const APP_ROUTES: Routes = [
        
        {path:'alterar-senha',component:AlterarSenhaComponent},
        {path:'endereco',component:EnderecoComponent},
        {path:'senha',component:SenhaComponent},
        {path:'identificacao',component:IdentificacaoComponent },
        {path: '', component: LoginComponent}

];

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);