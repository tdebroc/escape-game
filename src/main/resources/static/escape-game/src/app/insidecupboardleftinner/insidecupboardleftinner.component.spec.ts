import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidecupboardleftinnerComponent } from './insidecupboardleftinner.component';

describe('InsidecupboardleftinnerComponent', () => {
  let component: InsidecupboardleftinnerComponent;
  let fixture: ComponentFixture<InsidecupboardleftinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsidecupboardleftinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsidecupboardleftinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
