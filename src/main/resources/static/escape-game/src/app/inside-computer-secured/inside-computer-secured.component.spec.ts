import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideComputerSecuredComponent } from './inside-computer-secured.component';

describe('InsideComputerSecuredComponent', () => {
  let component: InsideComputerSecuredComponent;
  let fixture: ComponentFixture<InsideComputerSecuredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideComputerSecuredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideComputerSecuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
