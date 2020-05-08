import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderSofaRightComponent } from './under-sofa-right.component';

describe('UnderSofaRightComponent', () => {
  let component: UnderSofaRightComponent;
  let fixture: ComponentFixture<UnderSofaRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderSofaRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderSofaRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
