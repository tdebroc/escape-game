import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidechestgoldComponent } from './insidechestgold.component';

describe('InsidechestgoldComponent', () => {
  let component: InsidechestgoldComponent;
  let fixture: ComponentFixture<InsidechestgoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsidechestgoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsidechestgoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
