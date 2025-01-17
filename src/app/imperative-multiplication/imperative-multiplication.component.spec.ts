import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperativeMultiplicationComponent } from './imperative-multiplication.component';

describe('ImperativeMultiplicationComponent', () => {
  let component: ImperativeMultiplicationComponent;
  let fixture: ComponentFixture<ImperativeMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImperativeMultiplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImperativeMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
