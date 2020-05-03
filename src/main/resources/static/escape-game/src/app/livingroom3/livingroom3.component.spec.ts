import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingroom3Component } from './livingroom3.component';

describe('Livingroom3Component', () => {
  let component: Livingroom3Component;
  let fixture: ComponentFixture<Livingroom3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Livingroom3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Livingroom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
