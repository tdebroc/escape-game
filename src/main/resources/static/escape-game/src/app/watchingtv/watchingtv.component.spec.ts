import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchingtvComponent } from './watchingtv.component';

describe('WatchingtvComponent', () => {
  let component: WatchingtvComponent;
  let fixture: ComponentFixture<WatchingtvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchingtvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchingtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
