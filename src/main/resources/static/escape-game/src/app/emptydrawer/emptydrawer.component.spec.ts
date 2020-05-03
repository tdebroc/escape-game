import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptydrawerComponent } from './emptydrawer.component';

describe('EmptydrawerComponent', () => {
  let component: EmptydrawerComponent;
  let fixture: ComponentFixture<EmptydrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptydrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptydrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
