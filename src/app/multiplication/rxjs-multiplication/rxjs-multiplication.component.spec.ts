import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMultiplicationComponent } from './rxjs-multiplication.component';

describe('RxjsMultiplicationComponent', () => {
  let component: RxjsMultiplicationComponent;
  let fixture: ComponentFixture<RxjsMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsMultiplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
