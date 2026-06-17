import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { ListaMiembros } from '../features/miembros/lista-miembros/lista-miembros';
import { Listas, } from '../features/listas/listas';
import { Mensajes } from '../features/mensajes/mensajes';
import { authGuard } from '../core/guards/auth-guard';

export const routes: Routes = [

    { path: '', component: Home },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            { path: 'miembros', component: ListaMiembros },
            { path: 'miembros/:id', component: ListaMiembros },
            { path: 'listas', component: Listas },
            { path: 'mensajes', component: Mensajes },
        ]
    },

    { path: '**', component: Home },

];
