import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislatorsFormComponent } from './legislators-form.component';

describe('LegislatorsFormComponent', () => {
  let component: LegislatorsFormComponent;
  let fixture: ComponentFixture<LegislatorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislatorsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislatorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
