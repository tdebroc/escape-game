import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingroomWindowComponent } from './livingroom-window.component';

describe('LivingroomWindowComponent', () => {
  let component: LivingroomWindowComponent;
  let fixture: ComponentFixture<LivingroomWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingroomWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingroomWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
