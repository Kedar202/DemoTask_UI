import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiValueFormComponent } from './multi-value-form.component';

describe('MultiValueFormComponent', () => {
  let component: MultiValueFormComponent;
  let fixture: ComponentFixture<MultiValueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiValueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiValueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
