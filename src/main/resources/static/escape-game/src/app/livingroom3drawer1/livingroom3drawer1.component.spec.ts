import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingroom3drawer1Component } from './livingroom3drawer1.component';


describe('Livingroom3drawer1Component', () => {
  let component: Livingroom3drawer1Component;
  let fixture: ComponentFixture<Livingroom3drawer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Livingroom3drawer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Livingroom3drawer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
