import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imperative-multiplication',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './imperative-multiplication.component.html',
  styleUrl: './imperative-multiplication.component.scss'
})
export class ImperativeMultiplicationComponent {

  factor1 = 1;
  factor2 = 2;
  factor3 = 3;
  product1And2 = this.factor1 * this.factor2;
  product1And3 = this.factor1 * this.factor3;

  factor1Updated() {
    this.multiply1And2();
    this.multiply1And3();
  }

  multiply1And2() {
    this.product1And2 = this.factor1 * this.factor2;
  }

  multiply1And3() {
    this.product1And3 = this.factor1 * this.factor3;
  }

  reset() {
    this.factor1 = 1;
    this.factor2 = 2;
    this.factor3 = 3;
    this.factor1Updated();
  }
}
