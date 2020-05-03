import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingroom4Component } from './livingroom4.component';

describe('Livingroom4Component', () => {
  let component: Livingroom4Component;
  let fixture: ComponentFixture<Livingroom4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Livingroom4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Livingroom4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
