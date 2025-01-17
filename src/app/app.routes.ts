import { Routes } from '@angular/router';
import { ImperativeMultiplicationComponent } from './imperative-multiplication/imperative-multiplication.component';
import { SignalMultiplicationComponent } from './signal-multiplication/signal-multiplication.component';
import { RxjsMultiplicationComponent } from './rxjs-multiplication/rxjs-multiplication.component';

export const routes: Routes = [
    { path: 'imperative-multiplication', component: ImperativeMultiplicationComponent },
    { path: 'rxjs-multiplication', component: RxjsMultiplicationComponent },
    { path: 'signal-multiplication', component: SignalMultiplicationComponent },
    { path: '**', redirectTo: '/imperative-multiplication', pathMatch: 'full' }
  
];
