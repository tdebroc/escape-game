import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorOpenedGameWonComponent } from './door-opened-game-won.component';

describe('DoorOpenedGameWonComponent', () => {
  let component: DoorOpenedGameWonComponent;
  let fixture: ComponentFixture<DoorOpenedGameWonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorOpenedGameWonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorOpenedGameWonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
