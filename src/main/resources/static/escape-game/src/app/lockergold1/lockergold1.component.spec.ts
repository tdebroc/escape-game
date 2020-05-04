import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lockergold1Component } from './lockergold1.component';

describe('Lockergold1Component', () => {
  let component: Lockergold1Component;
  let fixture: ComponentFixture<Lockergold1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lockergold1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lockergold1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
