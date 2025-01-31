import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, map, merge } from 'rxjs';

@Component({
  selector: 'app-rxjs-multiplication',
  imports: [FormsModule, AsyncPipe],
  standalone: true,
  templateUrl: './rxjs-multiplication.component.html',
  styleUrl: './rxjs-multiplication.component.scss'
})
export class RxjsMultiplicationComponent {
  factor1 = new BehaviorSubject(1);
  factor2 = new BehaviorSubject(2);
  factor3 = new BehaviorSubject(3);


  product1And2$ = combineLatest([this.factor1, this.factor2]).pipe(map(([f1, f2]) => f1 * f2));

  reset() {
    this.factor1.next(1);
    this.factor2.next(2);
    this.factor3.next(3);
  }


  //bad example, do not do this !
  product1And3ButBadlyWritten = this.factor1.value * this.factor3.value;
  ngOnInit() {
    //two memory leaks here, because i do not unsubscribe
    this.factor1.subscribe(f1 => {
      this.product1And3ButBadlyWritten = f1 * this.factor3.value;
    });
    this.factor3.subscribe(f3 => {
      this.product1And3ButBadlyWritten = this.factor1.value * f3;
    })
  }

  //This is better
  product1And3$ = combineLatest([this.factor1, this.factor3]).pipe(map(([f1, f3]) => f1 * f3));

}
