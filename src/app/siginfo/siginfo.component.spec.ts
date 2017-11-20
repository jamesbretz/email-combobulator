import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginfoComponent } from './siginfo.component';

describe('SiginfoComponent', () => {
  let component: SiginfoComponent;
  let fixture: ComponentFixture<SiginfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiginfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
