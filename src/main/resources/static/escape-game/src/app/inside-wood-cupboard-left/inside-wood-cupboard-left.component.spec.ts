import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideWoodCupboardLeftComponent } from './inside-wood-cupboard-left.component';

describe('InsideWoodCupboardLeftComponent', () => {
  let component: InsideWoodCupboardLeftComponent;
  let fixture: ComponentFixture<InsideWoodCupboardLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideWoodCupboardLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideWoodCupboardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
