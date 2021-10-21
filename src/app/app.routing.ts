import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


import { IndentificacaoComponent } from './indentificacao/indentificacao.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
       

        {path:'identificacao',component:IndentificacaoComponent },
        {path: '', component: LoginComponent}
];

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);