import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigoutputComponent } from './sigoutput.component';

describe('SigoutputComponent', () => {
  let component: SigoutputComponent;
  let fixture: ComponentFixture<SigoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
