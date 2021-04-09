import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSubFormComponent } from './sub-sub-form.component';

describe('SubSubFormComponent', () => {
  let component: SubSubFormComponent;
  let fixture: ComponentFixture<SubSubFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSubFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
