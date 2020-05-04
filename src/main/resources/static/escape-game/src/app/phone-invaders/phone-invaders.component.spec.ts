import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInvadersComponent } from './phone-invaders.component';

describe('PhoneInvadersComponent', () => {
  let component: PhoneInvadersComponent;
  let fixture: ComponentFixture<PhoneInvadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneInvadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneInvadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
