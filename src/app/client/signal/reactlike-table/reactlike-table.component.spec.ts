import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactlikeTableComponent } from './reactlike-table.component';

describe('ReactlikeTableComponent', () => {
  let component: ReactlikeTableComponent;
  let fixture: ComponentFixture<ReactlikeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactlikeTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactlikeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
