import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormiscrivitiComponent } from './formiscriviti.component';

describe('FormiscrivitiComponent', () => {
  let component: FormiscrivitiComponent;
  let fixture: ComponentFixture<FormiscrivitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormiscrivitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormiscrivitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
