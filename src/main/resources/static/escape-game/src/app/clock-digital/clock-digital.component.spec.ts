import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDigitalComponent } from './clock-digital.component';

describe('ClockDigitalComponent', () => {
  let component: ClockDigitalComponent;
  let fixture: ComponentFixture<ClockDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
