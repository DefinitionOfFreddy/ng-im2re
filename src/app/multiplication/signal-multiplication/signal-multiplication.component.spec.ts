import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalMultiplicationComponent } from './signal-multiplication.component';

describe('SignalMultiplicationComponent', () => {
  let component: SignalMultiplicationComponent;
  let fixture: ComponentFixture<SignalMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalMultiplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
