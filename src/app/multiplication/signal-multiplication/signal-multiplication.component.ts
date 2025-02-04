import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-multiplication',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './signal-multiplication.component.html',
  styleUrl: './signal-multiplication.component.scss'
})
export class SignalMultiplicationComponent {
  factor1 = signal(1);
  factor2 = signal(2);
  factor3 = signal(3);

  product1And2 = computed(() => this.factor1() * this.factor2());
  product1And3 = computed(() => this.factor1() * this.factor3());
  reset() {
    this.factor1.set(1);
    this.factor2.set(2);
    this.factor3.set(3);  
  }

  myEffect = effect(() => {
    this.product1And2();

    console.log("this.product1And2Changed !")
  })
}
