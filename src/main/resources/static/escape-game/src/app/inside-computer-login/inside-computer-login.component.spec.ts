import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideComputerLoginComponent } from './inside-computer-login.component';

describe('InsideComputerLoginComponent', () => {
  let component: InsideComputerLoginComponent;
  let fixture: ComponentFixture<InsideComputerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideComputerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideComputerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
