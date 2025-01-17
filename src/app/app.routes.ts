import { Routes } from '@angular/router';
import { ImperativeMultiplicationComponent } from './imperative-multiplication/imperative-multiplication.component';
import { SignalMultiplicationComponent } from './signal-multiplication/signal-multiplication.component';

export const routes: Routes = [
    { path: 'imperative-multiplication', component: ImperativeMultiplicationComponent },
    { path: 'signal-multiplication', component: SignalMultiplicationComponent },
    { path: '', redirectTo: '/imperative-multiplication', pathMatch: 'full' }
  
];
