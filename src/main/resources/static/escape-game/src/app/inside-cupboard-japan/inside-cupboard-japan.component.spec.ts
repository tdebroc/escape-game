import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideCupboardJapanComponent } from './inside-cupboard-japan.component';

describe('InsideCupboardJapanComponent', () => {
  let component: InsideCupboardJapanComponent;
  let fixture: ComponentFixture<InsideCupboardJapanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideCupboardJapanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideCupboardJapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
