import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigndatabindingComponent } from './assigndatabinding.component';

describe('AssigndatabindingComponent', () => {
  let component: AssigndatabindingComponent;
  let fixture: ComponentFixture<AssigndatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigndatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigndatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
