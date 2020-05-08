import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadGrimoireComponent } from './read-grimoire.component';

describe('ReadGrimoireComponent', () => {
  let component: ReadGrimoireComponent;
  let fixture: ComponentFixture<ReadGrimoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadGrimoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadGrimoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
