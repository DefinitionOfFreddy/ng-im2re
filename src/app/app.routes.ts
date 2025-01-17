import { Routes } from '@angular/router';
import { ImperativeMultiplicationComponent } from './multiplication/imperative-multiplication/imperative-multiplication.component';
import { SignalMultiplicationComponent } from './multiplication/signal-multiplication/signal-multiplication.component';
import { RxjsMultiplicationComponent } from './multiplication/rxjs-multiplication/rxjs-multiplication.component';
import { TableComponent } from './client/signal/table/table.component';

export const routes: Routes = [
    { path: 'multiplication', children: [
        {path: 'imperative', component: ImperativeMultiplicationComponent},
        {path: "rxjs", component: RxjsMultiplicationComponent},
        {path: "signal", component: SignalMultiplicationComponent},
        {path: "**", redirectTo: "imperative"}
        ]
    },
    { path: 'client', children: [
        {path: 'signal', component: TableComponent },        
        {path: "**", redirectTo: "signal"}
    ]},
    { path: '**', redirectTo: '/multiplication/imperative', pathMatch: 'full' }
];
