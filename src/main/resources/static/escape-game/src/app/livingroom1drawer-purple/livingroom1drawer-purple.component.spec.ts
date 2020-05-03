import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingroom1drawerPurpleComponent } from './livingroom1drawer-purple.component';

describe('Livingroom1drawerPurpleComponent', () => {
  let component: Livingroom1drawerPurpleComponent;
  let fixture: ComponentFixture<Livingroom1drawerPurpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Livingroom1drawerPurpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Livingroom1drawerPurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
