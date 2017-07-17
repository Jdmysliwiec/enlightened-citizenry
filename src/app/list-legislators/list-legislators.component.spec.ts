import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLegislatorsComponent } from './list-legislators.component';

describe('ListLegislatorsComponent', () => {
  let component: ListLegislatorsComponent;
  let fixture: ComponentFixture<ListLegislatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLegislatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLegislatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
