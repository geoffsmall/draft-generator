import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftTypesComponent } from './draft-types.component';

describe('DraftTypesComponent', () => {
  let component: DraftTypesComponent;
  let fixture: ComponentFixture<DraftTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
